import * as ACCOUNTS from '../Constant/Accounts';
import initialState from '../initialState';

export default function accountReducer(state = initialState.account,action) {
  switch (action.type) {
    case ACCOUNTS.GET_ACCOUNTS_SUCCESS:
      console.log(action.result[0])
      return action.result;
      //    console.log(action)
    case ACCOUNTS.GET_BALANCE_SUCCESS:
      console.log(action.result)
      return action.result;
    default:
      return state;
  }
}
