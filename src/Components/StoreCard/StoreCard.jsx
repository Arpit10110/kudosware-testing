import React from 'react';
import "./StoreCard.css";
import { useDispatch } from "react-redux";

const StoreCard = ({ id, image, title, Buy, Rent }) => {
  const dispatch = useDispatch();

  const addtocartHandler = (variant) => {
    const data = {
       id: variant.id,  // Use variant ID (either Buy or Rent)
       title: title,
       image: image, 
       price: variant.price,
       qty: 1
    };
    dispatch({
       type: 'addtocart',
       payload: data
    });
    dispatch({
      type:'Calculate'
    });
 };

  return (
    <>
      <div className="store-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {/* Passing Buy and Rent specific details to addtocartHandler */}
        <button onClick={() => addtocartHandler(Buy)}>Buy Now @{Buy.price} INR</button>
        <button onClick={() => addtocartHandler(Rent)}>Rent @{Rent.price} INR</button>
      </div>
    </>
  );
};

export default StoreCard;
