// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import "../src/MyNFT.sol";

contract MintNFTScript is Script {
    function run() external {
        // Start broadcasting transactions with your wallet
        vm.startBroadcast();

        // Connect to your deployed contract
        MyNFT nft = MyNFT(0x25Dd78c2c9bB05F80b55083f4F2b0315769C570c);

        // Mint NFT to recipient with tokenURI
        address owner=nft.ownerOf(0);
        console.log("Owner of token 0:",owner);

        vm.stopBroadcast();
    }
}
