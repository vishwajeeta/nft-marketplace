import React, { useEffect, useState } from "react";

interface NFT {
  tokenId: number;
  uri: string;
}

export default function NFTList({ nfts }: { nfts: NFT[] }) {
  const [nftData, setNftData] = useState<{ tokenId: number; image: string }[]>(
    []
  );

  const ipfsToHttp = (uri: string) =>
    uri.startsWith("ipfs://") ? `https://ipfs.io/ipfs/${uri.slice(7)}` : uri;

  useEffect(() => {
    const loadMetadata = async () => {
      const data = await Promise.all(
        nfts.map(async (nft) => {
          try {
            const res = await fetch(ipfsToHttp(nft.uri));
            const meta = await res.json();
            return {
              tokenId: nft.tokenId,
              image: ipfsToHttp(meta.image),
            };
          } catch (err) {
            console.error(`Error loading metadata for token ${nft.tokenId}`, err);
            return { tokenId: nft.tokenId, image: "" };
          }
        })
      );
      setNftData(data);
    };

    if (nfts.length) {
      loadMetadata();
    }
  }, [nfts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {nftData.map((nft) => (
        <div key={nft.tokenId} className="border rounded-lg shadow p-4">
          {nft.image ? (
            <img
              src={nft.image}
              alt={`NFT ${nft.tokenId}`}
              className="w-full  object-cover rounded"
            />
          ) : (
            <p>No image available</p>
          )}
          <p className="mt-2 font-bold">Token #{nft.tokenId}</p>
        </div>
      ))}
    </div>
  );
}
