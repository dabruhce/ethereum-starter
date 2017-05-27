import React, { PropTypes, PureComponent } from 'react';
import { ListItem } from 'material-ui/List';

class Accounts extends PureComponent {
  static propTypes = {
    account: PropTypes.string.isRequired,
  };

  render() {
    let acct = this.props.account;
    return (
      <p>selected account - {acct}</p>
    );
  }
}

export default Accounts;
