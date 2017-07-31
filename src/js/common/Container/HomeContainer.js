import { connect } from 'react-redux';
import Home from '../Component/Page/Home';
import { fetchCurrentBlockNumber } from '../Action/BlockActions';
import { fetchAccount } from '../Action/AccountsActions';
import { sendTransactionRequest, sendTransaction } from '../Action/SendTransactionActions';
import { fetchBalance } from '../Action/BalanceActions';
// import { sendTransactionRequest } from '../Action/SendTransactionActions';

function mapStateToProps(state) {
  return {
    blocks: Object.keys(state.blocks).map(id => state.blocks[id]).sort((a, b) =>
      (a.timestamp > b.timestamp ? -1 : 1)
    ),
    currentBlockNumber: state.currentBlock,
    currentAccount: state.account,
    balance: state.balance,
//    sendTransactionRequest: state.sendTransactionRequest,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchCurrentBlock: fetchCurrentBlockNumber,
    fetchAccount,
    fetchBalance,
    sendTransaction,
    sendTransactionRequest,
  }
)(Home);
