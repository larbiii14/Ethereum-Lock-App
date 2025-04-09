// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "forge-std/Test.sol";
import "../src/EtherWallet.sol"; // Adjust the path if needed

contract EtherWalletTest is Test {
    EtherWallet wallet;
    address payable testAddress = payable(address(0x1234567890AbcdEF1234567890aBcdef12345678)); // Test address

    // Set up function is run before each test
    function setUp() public {
        wallet = new EtherWallet(); // Deploy the EtherWallet contract
    }

    // Test the owner variable
    function testOwner() public view {
        address owner = wallet.owner();
        assertNotEq(owner, address(0)); // Ensure owner is not the zero address
    }

    // Test deposit and balance retrieval
    function testDepositAndBalance() public {
        uint256 expectedValue = 100000; // Amount to deposit
        
        // Deposit Ether into the wallet
        wallet.deposit{value: expectedValue}();

        // Check the contract's balance
        uint256 contractBalance = wallet.balanceOfContract();
        
        // Assert that the contract balance matches the expected value
        assertEq(contractBalance, expectedValue);
    }

    // Test sending Ether to another address
    function testSendEther() public {
        uint256 sendAmount = 50; // Amount to send

        // Deposit Ether first
        wallet.deposit{value: sendAmount}();

        // Send Ether to a test address
        wallet.send(testAddress, sendAmount);

        // Assert the balance of the test address increased by the send amount
        assertEq(testAddress.balance, sendAmount);
    }
}
