import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import "../Style/Success.css"
import { useDispatch } from 'react-redux';
const Success = () => {
  const dispatch = useDispatch();
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get('refrence');
  const { User_id } = useSelector((state) => state.tinyclodeatil || {});
  const { Cart = [] } = useSelector((state) => state.tinyclodeatil || {});
  const { Shipping = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Total = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { selectedaddressIndex } = useSelector((state) => state.tinyclodeatil || {});

  // Make sure to map through Cart to get the selected address details

  const lineItems = Cart.map(item => ({
    variantId: item.id,  
    quantity: item.qty || 1 ,
    price:item.price,
    title:item.title
  }));

  const orderdata = {
    customerId: User_id,
    lineItems,
    totalPrice: Total,
    shippingPrice: Shipping,
    paymentId: reference,
    address1:selectedaddressIndex.address1,
    city: selectedaddressIndex.city,
    province: selectedaddressIndex.province,
    country: selectedaddressIndex.country,
    zip: selectedaddressIndex.zip,
    name:selectedaddressIndex.first_name,
    province_code: selectedaddressIndex.province_code
  };

  const createOrder = async () => {
    try {
      console.log(orderdata); // Debugging output
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/createorder`, orderdata);
      console.log(data);

      // dispatch({
      //   type:"emptycart"
      // })
      // dispatch({
      //   type: 'Calculate'
      // });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  useEffect(() => {
    createOrder()
    console.log(reference)
  }, []);

  return (
    <>
     <div className='Success-main' >
        <h2>Order has been placed Successfully</h2>
        <Link to="/" >Go back to Home Page</Link>
     </div>
    </>
  );
};

export default Success;
