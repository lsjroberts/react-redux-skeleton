import * as types from './actionTypes';

export function changeAmount(amount) {
  return {
    type: types.CURRENCY_CHANGE_AMOUNT,
    amount
  };
}
