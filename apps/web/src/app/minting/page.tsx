"use client"
import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import contractData from "./IPFSContractABI.json";
import NFTList from "./nftList";


const CONTRACT_ADDRESS = contractData.address;

export default function Page() {
  const [tokenURI, setTokenURI] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [myNFTs, setMyNFTs] = useState<{ tokenId: number; uri: string }[]>([]);


  const mintNFT = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      setLoading(true);

      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Connect to contract
      const contract = new Contract(
        CONTRACT_ADDRESS,
        contractData.abi,
        signer
      ) as ethers.Contract & {
        mintNFT(to: string, tokenURI: string): Promise<ethers.ContractTransaction>;
      };

      // Call mintNFT with user address
      const tx = await contract.mintNFT(await signer.getAddress(), tokenURI);
      setTxHash(tx.hash);
      console.log(tx.hash)
      listMyNFTs();
      alert("NFT minted successfully!");
    } catch (err) {
      console.error(err);
      alert("Minting failed!");
    } finally {
      setLoading(false);
    }
  };



const listMyNFTs = async () => {
  if (!window.ethereum) return;

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Connect to contract
      const contract = new Contract(
    CONTRACT_ADDRESS,
    contractData.abi,
    signer
  );

  const myAddress = await signer.getAddress();
  const totalSupply = 10; // <-- replace with actual total or track off-chain

  const owned: { tokenId: number; uri: string }[] = [];

  for (let i = 0; i < totalSupply; i++) {
    try {
      const owner = await contract.ownerOf(i);
      if (owner.toLowerCase() === myAddress.toLowerCase()) {
        const uri = await contract.tokenURI(i);
        owned.push({ tokenId: i, uri });
        
      }
    } catch {
      // token doesn't exist
      console.log("no token exist")
    }
  }

  console.log("My NFTs:", owned);
  setMyNFTs(owned); // store in state for display

};

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Mint Your NFT</h1>
      <input
        type="text"
        placeholder="Enter token URI (IPFS URL)"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={mintNFT}
        disabled={loading || !tokenURI}
        className="px-4 py-2 bg-[#A259FF] text-white rounded hover:bg-blue-700 m-4"
      >
        {loading ? "Minting..." : "Mint NFT"}
      </button>
<button
        onClick={listMyNFTs}
        
        className="px-4 py-2 bg-[#A259FF] text-white rounded hover:bg-blue-700 m-4"
      >View My NFTs</button>
      {txHash && (
        <p className="mt-4 text-green-700">
          Transaction Hash:{" "}
          <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {txHash}
          </a>
        </p>
      )}
      <NFTList nfts={myNFTs} />
      
    </div>
  );
};
