import { fork } from 'redux-saga/effects';
import { watchWeb3APICalls } from './Web3Sagas';
import { watchFetchCurrentBlockNumberSuccess } from './BlockSagas';
import { watchFetchAccountsSuccess } from './AccountsSagas';
import { watchFetchBalance, watchFetchBalanceSuccess } from './BalanceSagas';
import { watchSendTransaction, watchSendTransactionSuccess } from './SendTransactionSagas';

export default function* root() {
  yield [
    fork(watchWeb3APICalls),
    fork(watchFetchCurrentBlockNumberSuccess),
    fork(watchFetchAccountsSuccess),
    fork(watchFetchBalanceSuccess),
    fork(watchFetchBalance),
    fork(watchSendTransactionSuccess),
    fork(watchSendTransaction),
  ];
}
