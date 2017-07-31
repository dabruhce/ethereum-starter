import { PropTypes } from 'react';

const transaction = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  gas: PropTypes.string,
  transactionIndex: PropTypes.string,
});

const block = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.string),
  timestamp: PropTypes.number,
});

const accountList = PropTypes.shape({
  accounts: PropTypes.arrayOf(PropTypes.string),
});

const account = PropTypes.shape({
  account: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
});

export default { transaction, block, account };
