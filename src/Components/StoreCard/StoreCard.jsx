import React from 'react';
import "./StoreCard.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const StoreCard = ({ id, image, title, Buy, Rent,tags }) => {
  const dispatch = useDispatch();

  const addtocartHandler = (variant) => {

    const tagArray = tags.split(', ');
    let color = '';
    let size = '';
    tagArray.forEach(tag => {
      if (tag.startsWith('Color:')) {
        color = tag.split(': ')[1]; // Get the value after "Color:"
      } else if (tag.startsWith('Size:')) {
        size = tag.split(': ')[1]; // Get the value after "Size:"
      }
    });





    const data = {
       id: variant.id,  // Use variant ID (either Buy or Rent)
       title: title,
       image: image, 
       price: variant.price,
       qty: 1,
       size:size
    };
    console.log(data);
    dispatch({
       type: 'addtocart',
       payload: data
    });
    dispatch({
      type:'Calculate'
    });

    toast.info("added to Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
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
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  );
};

export default StoreCard; 
