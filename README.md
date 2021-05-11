# Eth Contracts 101

Code for: https://blog.openzeppelin.com/a-gentle-introduction-to-ethereum-programming-part-1-783cc7796094/

## Run Examples

`Basic interaction on ETH testnet`
``` sh
yarn testrpc &
yarn interact
```

`Basic Contract interaction`

``` sh

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
