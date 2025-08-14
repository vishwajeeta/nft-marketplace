# Blockchain Developer Assessment

## Missions

### 1. Create a Simple NFT Smart Contract
Goal: Write and deploy a basic ERC-721 smart contract.
- Use OpenZeppelin contract
- Name: `MyNFT`
- Symbol: `MNFT`
- Include a public `mintNFT(address to, string memory tokenURI)` function
- Deploy locally using Hardhat or Foundry

### 2. Connect Wallet (Metamask)
Goal: Add a wallet connection.
- Use `ether.js` to connect MetaMask
- Show connected wallet address
- Use React state for connection status

### 3. Mint NFT from UI
Goal: Allow users to mint an NFT from the browser
- Create a new page: `/mint-nft`
- Form inputs: Token URI (image or metadata URL)
- On submit:
    - Connect to the smart contract
    - Call `mintNFT()` from MetaMask wallet
- Show a confirmation (e.g., transaction hash)

### 4. Display Minted NFTs
Goal: Read minted NFTs from the contract and display them
- Use `ehter.js` to fetch owned NFTs for the connected wallet
- Display NFT images and token IDs in a grid
- Use Tailwind CSS for styling

## Submission Instructions
1. Push your code to a public GitHub repository.
2. Include a brief README with:
    - Your name
    - Any assumptions
    - Feature completed
    - Instructions to run the app
3. Share the GitHub link with us.

Your submission should take around 4-5 hours. Please manage your time accordingly. Thank you.