# NFT Minting dApp
A simple ERC-721 NFT minting application where users can connect their MetaMask wallet, mint NFTs with a Token URI, and view their minted NFTs in a grid. Built with Next.js, TypeScript, Tailwind CSS, and Ethers.js.

## Author
Vishwajeet

## Assumptions
- User has MetaMask installed and connected to an Ethereum testnet (e.g., Sepolia).
- Token metadata (image, name, description) is hosted on IPFS.
- Smart contract is already deployed to the network.
- User has test ETH for gas fees.

### Token metadata contain:-
```json
{
  "name": "My Second NFT",
  "description": "This is an amazing NFT from my collection!",
  "image": "ipfs://bafkreich7yotkecayxlai7zonnho7lg6xywsh3plwkkptjhysd55m5zw6m",
  "attributes": [
    { "trait_type": "Strength", "value": 10 },
    { "trait_type": "Speed", "value": 7 }
  ]
}
```
---
## Features Completed

1. **ERC-721 Smart Contract**
   - Built with OpenZeppelin
   - Name: MyNFT, Symbol: MNFT
   - `mintNFT(address to, string tokenURI)` function
   - Deployed via Foundry

2. **Connect Wallet**
   - Connect/disconnect MetaMask
   - Show connected wallet address

3. **Mint NFT**
   - `/mint-nft` page with token URI input
   - Calls `mintNFT` from the browser
   - Displays transaction hash after minting

4. **Display Minted NFTs**
   - Fetches owned NFTs for connected wallet
   - Displays images and token IDs in a grid
   - Handles IPFS `ipfs://` links, raw hashes, and direct image URLs

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/vishwajeeta/nft-marketplace.git
cd nft-marketplace
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Smart-contract details
```
CONTRACT_ADDRESS=0x25Dd78c2c9bB05F80b55083f4F2b0315769C570c
NETWORK=sepolia
```

### 4. Run Development Server
```
npm run dev
```
Visit: http://localhost:3000


---

### **6. How to Use**

## How to Use
1. Open the app and click **Connect Wallet** to link MetaMask.
2. Go to `/minting`, enter your NFT Token URI (IPFS URL or hash), and click **Mint NFT**.
3. Wait for the MetaMask confirmation and transaction hash.
4. View your NFTs in the NFT by clicking **View My NFTs**.

## Smart Contract Info
- Name: MyNFT
- Symbol: MNFT
- Network: Sepolia
- Address: 0x25Dd78c2c9bB05F80b55083f4F2b0315769C570c

## 8. Screenshots

<p align="center">
  <img src="./images/Screenshot%201.png" alt="Screenshot 1" width="600" style="border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
</p>

<p align="center">
  <img src="./images/Screenshot%202.png" alt="Screenshot 2" width="600" style="border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
</p>

<p align="center">
  <img src="./images/Screenshot%203.png" alt="Screenshot 3" width="600" style="border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
</p>

<p align="center">
  <img src="./images/Screenshot%204.png" alt="Screenshot 4" width="600" style="border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
</p>

<p align="center">
  <img src="./images/Screenshot%205.png" alt="Screenshot 5" width="600" style="border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,0.2);" />
</p>


## Task compleded are:
### **1. Create a Simple NFT Smart Contract**

✅ **Done**

* ERC-721 (`MyNFT`, `MNFT`) created using OpenZeppelin.
* `mintNFT(address to, string memory tokenURI)` implemented.
* Deployable via **Foundry**.

---

### **2. Connect Wallet (MetaMask)**

✅ **Done**

* `connectWallet` implemented with `ethers.js` (v6 BrowserProvider).
* React state stores wallet address, provider, and contract instance.
* Added persistence suggestions for staying connected across pages.

---

### **3. Mint NFT from UI**

✅ **Done**

* `/minting` page with form for token URI.
* Calls `mintNFT` from connected MetaMask wallet.
* Shows confirmation with transaction hash (fixed for ethers v6).

---

### **4. Display Minted NFTs**

✅ **Done**

* Function `listMyNFTs` fetches NFTs owned by the connected wallet.
* Handles IPFS → HTTP conversion.
* Displays NFTs in a responsive Tailwind grid with images and token IDs.
* Fixed support for:

  * Token URI being metadata JSON.
  * Token URI being just an IPFS hash.
  * Direct image links.

---

### **5. Submission Prep**

✅ **Done**

* Need to push final code to a **public GitHub repo**.
* Add a **README** with:

