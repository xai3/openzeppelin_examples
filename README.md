# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## typechain

```
npx hardhat typechain
```

# ERC20Sample

## scripts

```
npx hardhat run scripts/erc20sample/balance.ts --network mumbai
npx hardhat run scripts/erc20sample/deploy.ts --network mumbai
```

## tasks

```
npx hardhat generateHDNodeAddress --network mumbai --account-index 0
npx hardhat erc20sample.transferFromAdmin --network mumbai --contract-address {contract} --account-address {account} --amount 20
npx hardhat erc20sample.balanceOf --contract-address {contract} --account-address {account}
```