import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import CustomPropTypes from '../../PropTypes';
import Block from '../Block';
import Accounts from '../Accounts';
import SendTransaction from '../SendTransaction';


class Home extends Component {
  static propTypes = {
    blocks: PropTypes.arrayOf(CustomPropTypes.block),
    fetchCurrentBlock: PropTypes.func.isRequired,
    currentBlockNumber: PropTypes.number.isRequired,
    fetchAccounts: PropTypes.func.isRequired,
    currentAccount: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    sendTransactionRequest: PropTypes.func.isRequired,
  };


  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCurrentBlock();
    this.props.fetchAccount();


    this.setState({
  // TODO drive account refresh on interval, added button to refresh manually
  // need to fetch on interval no events if the account is switched in metamask
  //    intervalId: setInterval(this.props.fetchAccount, 20000),
    });

    this.setState({
      intervalId: setInterval(this.props.fetchCurrentBlock, 20000),
    });
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }


  handleClick = () => {
    this.props.fetchAccount();
  };


  render() {
    return (
      <div>
        <RaisedButton
          label="Refresh Account List"
          onTouchTap={this.handleClick}
        />
        <Accounts account={this.props.currentAccount} balance={this.props.balance} />
        <SendTransaction sendTransactionRequest={this.props.sendTransactionRequest} account={this.props.currentAccount} balance={this.props.balance} />
        <Divider />

        <div className="mdl-grid home">

          {this.props.blocks.length === 0 &&
          <CircularProgress className="mdl-cell--col-12" />
        }

          {this.props.blocks.map((block, key) =>
            <Block
              key={key}
              block={block}
              currentBlockNumber={this.props.currentBlockNumber}
            />
        )}
        </div>
      </div>
    );
  }
}

export default Home;
