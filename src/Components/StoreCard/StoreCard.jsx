import React from 'react'
import "./StoreCard.css"
const StoreCard = ({id,image,title,price}) => {
  return (
    <>
        <div className="store-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <button>Buy Now @{price}INR</button>
            <button>Rent  @{price}INR</button>
        </div>
    </>
  )
}

export default StoreCard