import * as types from './actionTypes';

export function setAmount(amount) {
  return {
    type: types.CURRENCY_SET_AMOUNT,
    amount: parseFloat(amount || 0, 10)
  };
}

export function setCurrency(currency) {
  return {
    type: types.CURRENCY_SET_CURRENCY,
    currency
  };
}

export function requestRates(currencies) {
  return {
    type: types.CURRENCY_REQUEST_RATES,
    currencies
  };
}

export function receiveRates(currencies, json) {
  let rates = new Map;

  for (var r in json.rates) {
    rates.set(r, json.rates[r]);
  }

  return {
    type: types.CURRENCY_RECEIVE_RATES,
    currencies,
    rates: rates
  };
}

export function fetchRates(currencies) {
  return dispatch => {
    dispatch(requestRates(currencies));
    return fetch('http://api.fixer.io/latest?base=GBP&symbols=' + currencies.join(','))
      .then(response => response.json())
      .then(json => dispatch(receiveRates(currencies, json)));
  };
}

function shouldFetchRates(state, currencies) {
  const rates = state.currency.rates;

  if (rates.items.size === 0) {
    return true;
  }

  if (rates.isFetching) {
    return false;
  }

  return false;
}

export function fetchRatesIfNeeded(currencies) {
  return (dispatch, getState) => {
    if (shouldFetchRates(getState(), currencies)) {
      return dispatch(fetchRates(currencies));
    }
  };
}
