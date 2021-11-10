const { ethers } = require("hardhat");
const { expect } = require("chai");
const { BN, time, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')
// await time.increase(60 * 60 * 24 * 7 + 1);
// await time.advanceBlock();
// time.latest()
// time.latestBlock()

describe("CryptoMC", function () {
  let CryptoMC, cryptoMC;
  let CryptoMcV2, cryptoMcV2;
  let Dope, dope;
  let Dope2, dope2;
  let tx, dopeBalance;
  
  const setup = async () => {
    // await setup();
    // Setup Base accounts
    [owner, alice, bob, cinde] = await ethers.getSigners();

  
    CryptoMC = await ethers.getContractFactory("CryptoMC");
    CryptoMcV2 = await ethers.getContractFactory("CryptoMcV2");
    Dope = await ethers.getContractFactory("DOPE");
    Dope2 = await ethers.getContractFactory("DOPE2");
   
  }
  
  before(async () => {
    await setup();

    cryptoMC = await upgrades.deployProxy(CryptoMC, [alice.address], {initializer: 'initialize'});

    dope = await upgrades.deployProxy(Dope, [cryptoMC.address, alice.address], {initializer: 'initialize'});
  });

  
  it("NFT 1 awardItem", async () => {
    
    tx = await cryptoMC.connect(alice).setGeneration("0", true);
    await tx.wait()

    tx = await cryptoMC.connect(bob).awardItem(bob.address,"sdafdfdvcdvd", "0");    
    await tx.wait();

  });

  it("DOPE 1 setDopePerTokenId", async () => {
    tx = await dope.connect(alice).setDopePerTokenId(parseUnits(5000));    
    await tx.wait();

    tx = await dope.connect(alice).disburseDOPE(bob.address, parseUnits(1000));    
    await tx.wait();

  });

  it("cryptoMcV2 upgrades", async () => {
    cryptoMcV2 = await upgrades.upgradeProxy(cryptoMC.address, CryptoMcV2 );

    aloo = await cryptoMcV2.aloo()
    console.log("scsdc", (aloo).toString());

    tx = await dope.connect(bob).claimAllForOwner(1);  
    await tx.wait();

    dopeBalance = await dope.balanceOf(bob.address)
    console.log("scsdc", formatUnits(dopeBalance));
  });

  it("cryptoMcV2 upgrades", async () => {

    tx = await cryptoMcV2.connect(cinde).awardItem(cinde.address,"sdafdfdvcdvd", "0");    
    await tx.wait();

    dope2 = await upgrades.upgradeProxy(dope.address, Dope2 );

    tx = await dope2.connect(cinde).claimAllForOwner(2);  
    await tx.wait();

    dopeBalance = await dope.balanceOf(cinde.address);
    console.log("scsdc", formatUnits(dopeBalance));

  });


  
  
});

// Lsit of Helper functions
// Converts checksum
const address = (params) => {
  return ethers.utils.getAddress(params);
}

// Converts token units to smallest individual token unit, eg: 1 DAI = 10^18 units 
const parseUnits = (params) => {
  return ethers.utils.parseUnits(params.toString(), 18);
}

// Converts token units from smallest individual unit to token unit, opposite of parseUnits
const formatUnits = (params) => {
  return ethers.utils.formatUnits(params.toString(), 18);
}

// Calculate Slippage, default 10 %
const slippage = (params) => {
  return params - params*10/100
}