// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/MyNFT.sol";

contract MintNFTScript is Script {
    function run() external {
        // Start broadcasting transactions with your wallet
        vm.startBroadcast();

        // Connect to your deployed contract
        MyNFT nft = MyNFT(0x25Dd78c2c9bB05F80b55083f4F2b0315769C570c);

        // Mint NFT to recipient with tokenURI
        nft.mintNFT(
            0x264BFac925e7Ea3B0404D92B66CD582C7c69f815,
            "ipfs://bafkreig4ulzr6xwwa3l6n7pajicmeuapthrjvocfwb7dlfl3x6ftexhrkm"
        );

        vm.stopBroadcast();
    }
}
