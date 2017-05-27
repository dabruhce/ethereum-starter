import { put, select, call } from 'redux-saga/effects';
import { takeLatest, take } from 'redux-saga';
import { GET_ACCOUNTS_SUCCESS } from '../Constant/Accounts';
import { fetchAccount } from '../Action/AccountsActions';

export function* fetchAccounts(action) {
  yield put(fetchAccount(action.result));
}

export function* watchFetchAccountsSuccess() {

  yield takeLatest(GET_ACCOUNTS_SUCCESS, fetchAccount);

}
