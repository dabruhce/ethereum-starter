import * as CONSTANT from '../Constant';
import * as SENDTRANSACTION from '../Constant/SendTransaction';

export const sendTransaction = num => ({
  type: CONSTANT.WEB3_API_CALL,
  types: [SENDTRANSACTION.SEND_TRANSACTION,
    SENDTRANSACTION.SEND_TRANSACTION_SUCCESS,
    SENDTRANSACTION.SEND_TRANSACTION_ERROR,
    SENDTRANSACTION.SEND_TRANSACTION_REQUESTED],
  args: [num],
});

export function sendTransactionRequest(text) {
  const action = { type: SENDTRANSACTION.SEND_TRANSACTION_REQUESTED, text };
  return action;
}
