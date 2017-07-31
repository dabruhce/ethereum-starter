import React, { PropTypes, PureComponent } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
// /
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
// import Web3 from 'web3';
import Web3 from '../Ethereum/Web3';

class Accounts extends PureComponent {
  static propTypes = {
    account: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  };


  render() {
    const style = {
      height: 200,
      width: 500,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    const acct = this.props.account;
    const bal = this.props.balance;
    return (
      <div style={{ maxWidth: 580, minWidth: 275 }}>

        <Paper style={style} zDepth={1}>
          <List>
            <ListItem insetChildren primaryText="Account" />
            <Divider inset />
            <ListItem
              primaryText={`Account: ${acct}`}
            />
            <ListItem
              primaryText={`Balance: ${web3.fromWei(bal, 'ether')}`}
            />
          </List>

        </Paper>
      </div>
    );
  }
}

export default Accounts;
