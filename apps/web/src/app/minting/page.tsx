"use client"
import { useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import contractData from "./IPFSContractABI.json";

const CONTRACT_ADDRESS = contractData.address;

export default function Page() {
  const [tokenURI, setTokenURI] = useState<string>("");
  const [txHash, setTxHash] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      const receipt = await tx.wait();

      setTxHash(receipt.transactionHash);
      alert("NFT minted successfully!");
    } catch (err) {
      console.error(err);
      alert("Minting failed!");
    } finally {
      setLoading(false);
    }
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
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Minting..." : "Mint NFT"}
      </button>

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
    </div>
  );
};
