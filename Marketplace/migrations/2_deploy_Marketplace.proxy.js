const MarketplaceProxy = artifacts.require("MarketplaceProxy");
const MarketPlaceUpgradeProxy = artifacts.require("MarketPlaceUpgradeProxy");

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545"'));

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(MarketplaceProxy);
  const marketplaceProxy = await MarketplaceProxy.deployed();
  console.log("MarketplaceProxy 1 deployed at:", marketplaceProxy.address)

  // const storageByProxy2 = await MarketplaceProxy.deployed();
  // console.log("MarketplaceProxy 2 deployed at:", storageByProxy2.address)
  const acceptedToken = "0x4bd9f41e256ae7fb8f8ef527d8c0eb3725946434"

  const proxyAdmin = accounts[1];
  const abiEncodeData = web3.eth.abi.encodeFunctionCall(
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_acceptedToken",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  [acceptedToken]
  )
  console.log("abiEncodeData", abiEncodeData);

  await deployer.deploy(MarketPlaceUpgradeProxy, proxyAdmin, marketplaceProxy.address, abiEncodeData);

  // console.log("storageUpgradeProxy deployed at:", storageUpgradeProxy.address)
  // console.log("storageUpgradeProxy deployed at:", storageUpgradeProxy)

  // await storageUpgradeProxy.initialize(123, {from: proxyAdmin})
  // let bal = await storageUpgradeProxy.retrieve()
  // console.log("bal", bal.toString());

  // await storageUpgradeProxy.upgradeToAndCall(storageByProxy2.address, abiEncodeData, {from: proxyAdmin})
  // bal = await storageUpgradeProxy.retrieve()
  // console.log("bal", bal.toString());

};
