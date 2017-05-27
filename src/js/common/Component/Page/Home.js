import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import CustomPropTypes from '../../PropTypes';
import Block from '../Block';
import Accounts from '../Accounts';

class Home extends Component {
  static propTypes = {
    blocks: PropTypes.arrayOf(CustomPropTypes.block),
    fetchCurrentBlock: PropTypes.func.isRequired,
    currentBlockNumber: PropTypes.number.isRequired,
    fetchAccounts: PropTypes.func.isRequired,
    currentAccount: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }

  componentWillMount() {
    this.props.fetchCurrentBlock();
    this.props.fetchAccount();

    // need to fetch on interval no events if the account is switched in metamask
    this.setState({
      intervalId: setInterval(this.props.fetchAccount, 10000),
    });

    this.setState({
      intervalId: setInterval(this.props.fetchCurrentBlock, 20000),
    });

  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
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
      <Accounts account={this.props.currentAccount} />
      </div>
    );
  }
}

export default Home;
