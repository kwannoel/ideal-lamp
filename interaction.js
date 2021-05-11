Web3 = require('web3')
provider = new Web3.providers.HttpProvider("http://localhost:5432")
web3 = new Web3(provider)

web3.eth.accounts.forEach(account => {
  balance = web3.eth.getBalance(account);
  console.log(balance);
})

from = web3.eth.accounts[0]
to = web3.eth.accounts[1]
transaction = { from: from, to: to, value: 100000 }
transactionHash = web3.eth.sendTransaction(transaction)

web3.eth.getTransaction(transactionHash)

web3.eth.accounts.forEach(account => {
  balance = web3.eth.getBalance(account);
  console.log(balance);
})
