import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { SEND_TRANSACTION, SEND_TRANSACTION_SUCCESS, SEND_TRANSACTION_REQUESTED } from '../Constant/SendTransaction';
import { sendTransaction, sendTransactionRequest } from '../Action/SendTransactionActions';

function* callBalanceFunc(action) {
  yield put(sendTransaction(action.text));
}


export function* sendTransactions(action) {
  console.log(`BEA ${action.result}`);
  console.log(`BEA ${action.account}`);
}

export function* watchSendTransaction(action) {
  yield takeEvery(SEND_TRANSACTION_REQUESTED, callBalanceFunc);
  console.log('##############################################');
}


export function* watchSendTransactionSuccess() {
//  yield takeLatest(SEND_TRANSACTION_SUCCESS, fetchBalances)
  console.log('##############################################');
}
