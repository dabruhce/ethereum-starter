import Web3 from 'web3';

// docs say getAccounts returns array, but sems like it selects current account
let accounts = web3.eth.accounts;
console.log(accounts)
console.log(web3.eth.accounts.length)
console.log(web3.currentProvider);

export default typeof web3 !== 'undefined' ? web3.currentProvider :
  new Web3.providers.HttpProvider('http://localhost:8545')
;
