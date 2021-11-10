const { ethers } = require("hardhat");
const oldCryptoMc = "0x734157470a9877Bc5955c1Ed898E52AC949FA90C"
// scripts/deploy.js
const main = async() => {

    const CryptoMcV2 = await ethers.getContractFactory("CryptoMcV2");
    console.log("Deploying cryptoMcV2...");

    const cryptoMcV2 = await upgrades.upgradeProxy(oldCryptoMc, CryptoMcV2 );
    console.log("cryptoMcV2 deployed to:", cryptoMcV2.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });