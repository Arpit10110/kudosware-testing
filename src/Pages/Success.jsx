import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Success = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get('refrence');
  const { User_id } = useSelector((state) => state.tinyclodeatil || {});
  const { Cart = [] } = useSelector((state) => state.tinyclodeatil || {});
  const { Shipping = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { Total = 0 } = useSelector((state) => state.tinyclodeatil || {});
  const { selectedaddressIndex } = useSelector((state) => state.tinyclodeatil || {});

  // Make sure to map through Cart to get the selected address details

  const lineItems = Cart.map(item => ({
    variantId: item.id,  // Each item's variant ID
    quantity: item.qty || 1 // Default to 1 if quantity is not provided
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
  };

  const createOrder = async () => {
    try {
      console.log(orderdata); // Debugging output
      const { data } = await axios.post(`${import.meta.env.VITE_Port}/createorder`, orderdata);
      console.log(data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // useEffect(() => {
  //   createOrder();
  // }, []);

  return (
    <>
      <Navbar />
      <h1>Your payment reference is {reference}</h1>
    </>
  );
};

export default Success;
