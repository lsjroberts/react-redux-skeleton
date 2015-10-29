import * as types from './actionTypes';

const initialState = 0;

export default function(state = initialState, action) {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + action.amount;

    case types.COUNTER_DECREMENT:
      return state - action.amount;

    default:
      return state;
  }
}
