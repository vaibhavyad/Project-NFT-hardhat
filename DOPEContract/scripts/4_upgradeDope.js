const { ethers } = require("hardhat");

const oldDope = "0xF20E28ca329E3E401d17242f17eA3C8753aFc9E2"

// scripts/deploy.js
const main = async() => {

    const DOPE2 = await ethers.getContractFactory("DOPE2");
    console.log("Deploying DOPE2...");
    const dope2 = await upgrades.upgradeProxy(oldDope, DOPE2 );
    console.log("DOPE2 deployed to:", dope2.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });