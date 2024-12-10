import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import SignupTopBanner from '../Components/SignupTopBanner/SignupTopBanner.jsx'
import { useSelector,useDispatch } from "react-redux"
import "../Style/Cart.css"
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
//img
import Cartimg1 from "../assets/Cart-img1.png"
import Cartimg2 from "../assets/Cart-img2.png"
import Cartimg3 from "../assets/Cart-img3.png"
import { useState } from 'react'
const Cart = () => {
  const dispatch= useDispatch()
  const { Cart } = useSelector(state => state.tinyclodeatil);
  const { TotalPrice } = useSelector(state => state.tinyclodeatil);
  const { Shipping } = useSelector(state => state.tinyclodeatil);
  const { Total } = useSelector(state => state.tinyclodeatil);
  const {User_id} = useSelector(state => state.tinyclodeatil);
  // Conditional Shipping fee (0 if cart is empty)
  const shippingFee = Cart.length === 0 ? 0 : Shipping;

  const increseQty = (id) => {
    dispatch({
      type: 'Increment',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };
  
  const decreaseQty = (id) => {
    dispatch({
      type: 'decrement',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };
  
  const deleteItem = (id) => {
    dispatch({
      type: 'deleteitem',
      payload: id
    });
    dispatch({
      type: 'Calculate'
    });
  };

  useEffect(() => {
    const cartsec2 = document.getElementById('cartsection2');
  
    if (cartsec2) {
      if (Cart.length > 3) {
        cartsec2.style.height = '80vh';
        cartsec2.style.overflowY = 'auto'; // Ensure scrolling is enabled
      } else {
        cartsec2.style.height = 'fit-content';
        cartsec2.style.overflowY = 'hidden'; // Hide scrolling if not needed
      }
    }
  }, [Cart]);
  
  

  return (
    <>
      <Navbar />
      <SignupTopBanner name={"Cart"} />
      <div className="cart-main">

        {/* Cart Items Section */}
        <div className="cart-items-main">
          <div className="cart-section1">
            <h1>Cart -<span> {Cart.length} items</span></h1>
          </div>
          
          {Cart.length === 0 ? (
            // If no items in cart, show "No items in cart" message
            <div className="empty-cart-message">
              <h2>!!!No items in your cart!!!</h2>
            </div>
          ) : (
            // If cart is not empty, show the items
            <div id='cartsection2' className="cart-section2">
              {Cart.map((i) => (
                <div className='cart-section2-item' key={i.id}>
                  <div className="cart-item-img">
                    <img src={i.image} alt={i.title} />
                  </div>
                  <div className="cart-item-cont">
                    <h4>{i.title}</h4>
                    {/* Assuming you will dynamically display the size */}
                    <h4>Size: ({i.size ? i.size : 'N/A'})</h4>
                    <h4>₹{Math.floor(i.price)}</h4>
                    <div className="cart-controller">
                        <div className="cart-qty">
                        <button onClick={() => increseQty(i.id)} >+</button>
                            <h5>{i.qty}</h5>
                          <button onClick={() => decreaseQty(i.id)} >-</button>
                        </div>
                        <button onClick={() => deleteItem(i.id)} className='cart-delete-btn' ><DeleteIcon className='cart-delete-icon' /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="cart-section3">

                <div className="cart-sec3-box">
                  <img src={Cartimg1} alt="Cartimg1" />
                  <h4>FREE SHIPPING</h4>
                </div>

                <div className="cart-sec3-box">
                  <img src={Cartimg2} alt="Cartimg2" />
                  <h4>EASY RETURNS</h4>
                </div>

                <div className="cart-sec3-box">
                  <img className='bnkl' src={Cartimg3} alt="Cartimg3" />
                  <h4>SECURE SHOPPING</h4>
                </div>


          </div>
        </div>
        {/* Price Summary Section - Always Visible */}
        <div className="cart-bill-main">
          <div className="price-summary-main">
            <div className="price-Summary">
              <h1>Price Summary</h1>
              <h4>Includes GST and All other Taxes</h4>
              <div className="total-price-div">
                <h2>Total Item Price</h2>
                <h2>₹{TotalPrice}</h2>
              </div>
              <div className="total-price-div">
                <h2>Shipping Fee</h2>
                <h2>₹{shippingFee}</h2>
              </div>
            </div>
            <div className="price-div">
              <h1>Total</h1>
              <h1>₹{Total}</h1>
            </div>
            {
              User_id== "" ? <Link to="/login">Proceed</Link>: <Link to="/checkout">Proceed to Checkout</Link>
            }
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Cart;
