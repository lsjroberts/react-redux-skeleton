import * as types from './actionTypes';

const initialState = {
  amount: 10,
  converted: 12
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CURRENCY_CHANGE_AMOUNT:
      return Object.assign({}, state, {
        amount: action.amount,
        converted: action.amount * 1.2
      });

    default:
      return state;
  }
}
