import React from 'react'
import "./NftCard.css"

function NftCard() {
  return (
    <div className='NftCard'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgw-orx-1eXJBb4aML_kZ1IfYabtW8ef7uQ&usqp=CAU" alt="" />
      <h2 className="nft_title">Call Of Duty</h2>
      <p className="price">0.025 ETH</p>
      <button className="buy">
        Buy
      </button>
    </div>
  )
}

export default NftCard
