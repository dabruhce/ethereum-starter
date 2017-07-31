import { put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { GET_BALANCE, GET_BALANCE_SUCCESS, GET_BALANCE_REQUESTED } from '../Constant/Balance';
import { fetchBalance } from '../Action/BalanceActions';

function* callBalanceFunc(action) {
  yield put(fetchBalance(action.account));
}


export function* fetchBalances(action) {
  console.log(`BEA ${action.result}`);
  console.log(`BEA ${action.account}`);
}

export function* watchFetchBalance(action) {
  yield takeEvery(GET_BALANCE_REQUESTED, callBalanceFunc);
}


export function* watchFetchBalanceSuccess() {
  yield takeLatest(GET_BALANCE_SUCCESS, fetchBalances);

  console.log('get balance saga: ');
}
