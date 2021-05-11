Web3 = require('web3')
provider = new Web3.providers.HttpProvider("http://localhost:5432")
web3 = new Web3(provider)


// load files

fs = require('fs')
myTokenABIFile = fs.readFileSync('MyToken_sol_MyToken.abi')
myTokenABI  = JSON.parse(myTokenABIFile.toString())

myTokenBINFile = fs.readFileSync('MyToken_sol_MyToken.bin')
myTokenByteCode = myTokenBINFile.toString()

//deploy

account = web3.eth.accounts[0]
MyTokenContract = web3.eth.contract(myTokenABI)
contractData = { data: myTokenByteCode, from: account, gas: 999999 }
deployedContract = MyTokenContract.new(contractData)

setTimeout(() => {

    // View Token Balances

    contractAddress = deployedContract.address
    instance = MyTokenContract.at(contractAddress)

    web3.eth.accounts.forEach(address => {
    tokens = instance.balanceOf.call(address)
    console.log(address + ": " + tokens)
    })

    // send tokens

    amount = 10
    from = web3.eth.accounts[0]
    to = web3.eth.accounts[1]
    transactionHash = instance.sendTokens(to, amount, { from: from })

    // checkout balances again

    web3.eth.accounts.forEach(address => {
    tokens = instance.balanceOf.call(address)
    console.log(address + ": " + tokens)
    })

    web3.eth.getTransaction(transactionHash)

}, 3000) // Delay so contract gets deployed
