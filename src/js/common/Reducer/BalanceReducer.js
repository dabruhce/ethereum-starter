import * as BALANCE from '../Constant/Balance';
import initialState from '../initialState';

export default function balanceReducer(state = initialState.balance, action) {
  switch (action.type) {
    case BALANCE.GET_BALANCE_SUCCESS:
      if (action.result !== 'undefined') { return action.result.toNumber(); }
      return state;
    case BALANCE.GET_BALANCE_ERROR:
      return state;
    case BALANCE.GET_BALANCE_REQUESTED:
      if (action.result === 'undefined') { return null; }
      return state;
    default:
      return state;
  }
}
