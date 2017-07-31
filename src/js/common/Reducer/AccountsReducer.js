import * as ACCOUNTS from '../Constant/Accounts';
import initialState from '../initialState';
// import { Provider } from '../Ethereum/Provider'
import Web3 from '../Ethereum/Web3';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case ACCOUNTS.GET_ACCOUNTS_SUCCESS:
      return action.result;
    default:
      return state;
  }
}
