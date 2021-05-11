# Eth Contracts 101

Code for: https://blog.openzeppelin.com/a-gentle-introduction-to-ethereum-programming-part-1-783cc7796094/

## Run Examples

`Basic interaction on ETH testnet`
``` sh
yarn testrpc &
yarn demo-basic
```

`Basic Contract interaction`

``` sh
yarn testrpc &
yarn demo-contract
```

## Notes

### Part 1

EVM is sandboxed runtime. It is an isolated environment for smart contracts in Ethereum. Smart contracts on EVM have no access to network, file system / other processes.

Gas is cost of executing instruction on EVM. Formula for fee:

``` sh
gas cost (GAS) x gas price (ETH / GAS) = fee (ETH)
```

Gas price is up to you to set. But of course demand and supply comes into play. Too low, no one will execute your code.

Solidity features: Contract oriented, similar syntax to js, statically typed, inheritance, libraries, user defined types. Compiled to EVM assembly.

Transactions, code run are all recorded on ETH blockchain.

Accounts: 
1. External accounts (mostly owned by people to store ETH).
2. Contract accounts (controlled by code stored in it).

Only external accounts can initiate transactions.

### Part 2

Usecases for smart contracts:
1. Crowdfunding tools: ICOs
2. token sales

Tokens aka Digital Asset: Analgous to vouchers. You can create your own, and set the rules for redemption.
Sold in ICOs, e.g. I sell 50,000 giraffe tokens for 1 ETH.

`msg.sender` address where external function call to contract came from.

`constant` functions: no state changes. E.g. read-only functions. `non-constant` functions may update state of contract account.
