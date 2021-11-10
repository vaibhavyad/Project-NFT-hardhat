# Upgradeable CryptoMC and DOPE Hardhat Project

This project demonstrates Hardhat use case to test the contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists below to deploys and run testcases.

Try running some of the following tasks:

```shell
npm install
npx hardhat compile
```
### Configure hardhat
Insert the mnemonic in the hardhat.config.js file.
```mnemonic = "manage sco........." ```

### 1. Deploy the CryptoMc
Deploy the CryptoMc script by the following command given below.
```sh
npx hardhat run --network rinkeby scripts/1_deployCryptoMC.js
```
> Note: Copy the Deploy address place in the Dope1 file.

### 2.Deploy the Dope1
Deploy the Dope1 script by the following command given below.
```sh
npx hardhat run --network rinkeby scripts/2_deployDope1.js
```
**Once the contract are deployed we have to verify the contract address on rinkeby Network [here..](https://rinkeby.etherscan.io/proxyContractChecker/)
Click on the implementation contract address and Verify & Publish Contract Source Code.**
https://rinkeby.etherscan.io/verifyContract
> Note:  This complete your deployment your smart contract if you want to update the contract in future run the below command.

### 3.Deploy the upgradeCryptoMc
Before we Deploy the upgradeCryptoMc script replace with the oldCryptoMc address in upgradeCryptoMc.js file then deploy with the following command given below.
```sh
npx hardhat run --network rinkeby scripts/3_deployDope1.js
```
> Note: Copy the CryptoMc address of place in the upgradeCryptoMc file.

### 4.Deploy the upgradeDope
Before we Deploy the upgradeDope script replace with the oldDope address in upgradeDope.js with Dope1 deployed address then deploy with the following command given below.
```sh
npx hardhat run --network rinkeby scripts/4_upgradeDope.js
```

**Steps-** 
1. Contract Address you would like to verify
2. Select Compiler Type - Solidity (Single File)
3. Select Compiler Version - 0.8.0
4. Select Open Source License Type, them click continue
5. Paste the source Code and set optimizer true then click verify and wait for Publish Contract

### Verify & Publish Contract

CryptoMc - [0x365619a5c4876415cbaA118273266971b448e588](https://rinkeby.etherscan.io/address/0x365619a5c4876415cbaA118273266971b448e588)
Dope1 - [0xB6EB9347Da109c485D243c38E1Bc0dA9e6fAeda9](https://rinkeby.etherscan.io/address/0xB6EB9347Da109c485D243c38E1Bc0dA9e6fAeda9)
upgradeCryptoMc - [0x365619a5c4876415cbaA118273266971b448e588](https://rinkeby.etherscan.io/address/0x365619a5c4876415cbaA118273266971b448e588)
upgradeDope - [0xcc7ec7dFF1DDAe04EDDA8dF3dE1ACA046c06d344](https://rinkeby.etherscan.io/address/0xcc7ec7dFF1DDAe04EDDA8dF3dE1ACA046c06d344)
To check verifyed put addresss [here!](https://rinkeby.etherscan.io/proxyContractChecker) 

### Test cases
```sh
npx hardhat test test/1.testCase.js 
```
