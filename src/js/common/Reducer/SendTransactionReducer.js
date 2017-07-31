import * as SENDTRANSACTION from '../Constant/SendTransaction';
import initialState from '../initialState';

export default function sendTransactionReducer(state = initialState.balance, action) {
  switch (action.type) {
    case SENDTRANSACTION.SEND_TRANSACTION_SUCCESS:
      console.log(`SEND REDUCER: ${action.result} ${action.balance} ${action.type}`);
      return state;
    case SENDTRANSACTION.SEND_TRANSACTION_ERROR:
      return state;
    case SENDTRANSACTION.SEND_TRANSACTION_REQUESTED:
      return state;
    default:
      return state;
  }
}
