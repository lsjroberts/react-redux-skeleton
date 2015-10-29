import { combineReducers } from 'redux';

import * as types from './actionTypes';

function amount(state = 10, action) {
  switch (action.type) {
    case types.CURRENCY_SET_AMOUNT:
      return action.amount;

    default:
      return state;
  }
}

function currency(state = '', action) {
  switch (action.type) {
    case types.CURRENCY_SET_CURRENCY:
      return action.currency;

    default:
      return state;
  }
}

function rates(state = {
  isFetching: false,
  items: new Map
}, action) {
  switch (action.type) {
    case types.CURRENCY_REQUEST_RATES:
      return { ...state,
        isFetching: true
      };

    case types.CURRENCY_RECEIVE_RATES:
      return { ...state,
        isFetching: false,
        items: action.rates
      };

    default:
      return state;
  }
}

export default combineReducers({
  amount,
  currency,
  rates
});
