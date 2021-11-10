
// scripts/deploy.js
const { ethers } = require("hardhat");

 const main = async() => {

  [owner, alice, bob, cinde] = await hre.ethers.getSigners();

  const CryptoMC = await ethers.getContractFactory("CryptoMC");
  console.log("Deploying cryptoMC...");
  const cryptoMC = await upgrades.deployProxy(CryptoMC, [alice.address], { initializer: 'initialize' });
  console.log("cryptoMC deployed to:", cryptoMC.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });