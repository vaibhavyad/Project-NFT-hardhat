require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const mnemonic = "quiz cupboard clay usage tackle trend chunk arch oven frown turn face rice mouse daring";


// require('dotenv').config()
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/KrOdkFtmPLOPOnowNZGHgi9nhhsjtzzf",
      accounts: {mnemonic: mnemonic}
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "B2C2EC473SI5SIPMG6U9R5B7R9DJR8UXJV"
  },
  mocha: {
    timeout: 70000
  }

};
