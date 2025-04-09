const { network } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const etherWallet = await deploy("EtherWallet", {
    from: deployer,
    log: true,
    args: [],
    waitConfirmations: network.config.blockConfirmations || 5,
  });
  if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY) {
    await verify(etherWallet.address, []);
  }
  console.log(`contract address deployed at: ${etherWallet.address}`);
};
