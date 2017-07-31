// import { put, select, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { GET_ACCOUNTS_SUCCESS } from '../Constant/Accounts';
import { fetchAccount } from '../Action/AccountsActions';

export function* fetchAccounts(action) {
  console.log(`fetch saga ${action.result}`);
  // yield delay(10000);
}


export function* watchFetchAccountsSuccess() {
  yield takeLatest(GET_ACCOUNTS_SUCCESS, fetchAccount);
  // yield delay(10000);
}
