import { combineReducers } from 'redux';
import blocks from './BlocksReducer';
import currentBlock from './CurrentBlockReducer';
import transactions from './TransactionReducer';
import account from './AccountsReducer';
import balance from './BalanceReducer';
import sendTransaction from './SendTransactionReducer';

export default combineReducers({
  blocks,
  transactions,
  currentBlock,
  account,
  balance,
  sendTransaction,
});
