import React from "react";
import NftCard from "../components/NftCard";
import "./Explore.css";

function Explore() {
  return (
    <div className="Explore">
      <div className="Exploree">
        <h1 className="head">Explore</h1>
        <div className="nft_cards">
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </div>
      </div>
    </div>
  );
}

export default Explore;
