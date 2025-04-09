const { assert } = require("chai");
const { ethers, getNamedAccounts } = require("hardhat");

describe("EtherWallet", async () => {
  let etherWallet;
  beforeEach(async () => {
    const etherWalletFactory = await ethers.getContractFactory("EtherWallet");
    etherWallet = await etherWalletFactory.deploy();
  });
  it("Owner variable set successfully", async () => {
    const owner = await etherWallet.owner();
    assert(owner != "");
  });
  it("should deposit and get balance successfully", async () => {
    const expextedValue = "100000";
    await etherWallet.deposit({ value: expextedValue });
    const getValue = await etherWallet.balanceOfContract();
    assert.equal(expextedValue, getValue);
  });
});
