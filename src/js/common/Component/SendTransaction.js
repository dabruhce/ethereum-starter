import React, { PropTypes, PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { sendTransaction } from '../Action/SendTransactionActions';

class SendTransaction extends PureComponent {
  static propTypes = {
    sendTransactionRequest: PropTypes.func.isRequired,
    account: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  };


  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      amountErrorText: '',
    };
  }

  handleClick = () => {
    const sender = this.props.account.toString();
    const receiver = this.props.account.toString();
//    var bal =  this.props.account.balance;

    const val = { from: sender, to: receiver, value: web3.toWei(this.state.amount, 'ether') };
    this.props.sendTransactionRequest(val);
  };

  handleAmountFieldChange = (event) => {
    this.setState({ amount: event.target.value });
    console.log(`tar: ${event.target.value} event ${web3.fromWei(this.props.balance, 'ether')}`);
    if (web3.toWei(event.target.value, 'ether') > this.props.balance) {
      console.log('gt');
      this.setState({ amountErrorText: 'Amount must be greater than 0 and less than current account balance ' });
    } else {
      this.setState({ amountErrorText: '' });
    }
  };


  render() {
    const paperStyle = {
      height: 430,
      width: 500,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    const account = this.props.account;
    const buttonStyle = {
      margin: 12,
    };

    return (
      <div style={{ maxWidth: 580, minWidth: 275 }}>

        <Paper style={paperStyle} zDepth={1}>
          <List>
            <ListItem
              insetChildren
              primaryText="Send Ether"
            />
            <Divider inset />

            <ListItem
              primaryText={'From: '}
            />
            <TextField
              disabled
              value={account}
            />
            <ListItem
              primaryText={'To: '}
            />
            <TextField
              disabled
              value={account}
            />
          </List>

          <TextField
            floatingLabelText="Amount: "
            id="amountField"
            value={this.state.amount}
            onChange={this.handleAmountFieldChange}
            errorText={this.state.amountErrorText}
          />
          <ListItem
            insetChildren
            rightIconButton={<RaisedButton
              label="Send Transaction"
              secondary
              style={buttonStyle}
              onTouchTap={this.handleClick}
            />}
          />


        </Paper>
      </div>
    );
  }
}

export default SendTransaction;
