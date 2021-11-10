# Upgradeable CryptoMC and DOPE Hardhat Project

This project demonstrates Hardhat use case to test the contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists below to deploys and run testcases.

Try running some of the following tasks:

```shell
npm i 
npx hardhat compile
```

## Deploy the Script 

Deploy the CryptoMc script after deploy copy the address and replace with the nftAddress in the Dope1 Script file
```sh
npx hardhat run --network kovan scripts/1_deployCryptoMC.js
```
Deploy the Dope1 script
```sh
npx hardhat run --network kovan scripts/2_deployDope1.js
```
Before the Deploy the upgradeCryptoMc script replace with the oldCryptoMc address with the new deploy CryptoMc address
```sh
npx hardhat run --network kovan scripts/3_deployDope1.js
```
Before the Deploy the upgradeDope script replace with the oldDope address with the new deploy Dope1 address
```sh
npx hardhat run --network kovan scripts/4_upgradeDope.js
```
## Test cases
```sh
npx hardhat test test/1.testCase.js 
```