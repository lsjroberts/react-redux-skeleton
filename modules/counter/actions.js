import * as types from './actionTypes';

export function increment(amount = 1) {
  return {
    type: types.COUNTER_INCREMENT,
    amount
  };
};

export function decrement(amount = 1) {
  return {
    type: types.COUNTER_DECREMENT,
    amount
  };
};
