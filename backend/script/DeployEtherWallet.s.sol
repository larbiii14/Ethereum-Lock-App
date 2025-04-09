// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "forge-std/Script.sol";
import "../src/EtherWallet.sol";

contract DeployEtherWallet is Script {
    function run() external {
        vm.startBroadcast(); // Uses your private key from env
        new EtherWallet();
        vm.stopBroadcast();
    }
}
