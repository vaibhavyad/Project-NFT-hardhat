// scripts/deploy.js
const { ethers } = require("hardhat");
var nftAddress="0x734157470a9877Bc5955c1Ed898E52AC949FA90C";

 const main = async() => {

  [owner, alice, bob, cinde] = await hre.ethers.getSigners();
console.log("alice", alice.address);
    const DOPE = await ethers.getContractFactory("DOPE");
    console.log("Deploying DOPE...");
    const Dope = await upgrades.deployProxy(DOPE, [nftAddress, alice.address], { initializer: 'initialize' });
    console.log("DOPE deployed to:", Dope.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });