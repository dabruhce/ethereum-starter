import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { normalize } from 'normalizr';
import { WEB3_API_CALL } from '../Constant';
import Web3 from '../Ethereum/Web3';
import { fetchBalance } from '../Action/BalanceActions';
import { sendTransactionRequest } from '../Action/SendTransactionActions';

const createCallback = (resolve, reject) => (error, result) => {
  if (!error) {
    resolve(result);
  }
  reject(error);
};

function callWeb3MethodAsPromise(method, args = []) {
  return new Promise((resolve, reject) => {
    if (!Object.prototype.hasOwnProperty.call(Web3, method)) {
      reject(new Error(`Method '${method} does'nt exists in Web3 API.`));
    }

    return Web3[method](...args, createCallback(resolve, reject));
  });
}

export function* web3APICall(action) {
  const [method, successActionType, failureActionType] = action.types;
  const args = action.args || [];
  const schema = action.schema;
  console.log(`provider is: ${Web3.currentProvider}`);

  try {
    const result = yield call(callWeb3MethodAsPromise, method, args);

    if (schema) {
      yield put({ type: successActionType, ...normalize(result, schema) });
    } else if (successActionType === 'GET_BALANCE_SUCCESS') {
      yield put({ type: successActionType, result });
    } else if (successActionType === 'SEND_TRANSACTION_SUCCESS') {
      yield put({ type: successActionType, result });
    } else if (successActionType === 'GET_ACCOUNTS_SUCCESS') {
      yield put({ type: successActionType, result });
      yield put({ type: 'GET_BALANCE_REQUESTED', account: result.toString() });
    } else {
      yield put({ type: successActionType, result });
    }
  } catch (e) {
    yield put({ type: failureActionType, e });
  }
}

export function* watchWeb3APICalls() {
  yield takeEvery(WEB3_API_CALL, web3APICall);
}
