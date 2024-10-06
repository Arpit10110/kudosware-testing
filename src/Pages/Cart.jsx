import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SignupTopBanner from '../Components/SignupTopBanner/SignupTopBanner.jsx'
import { useSelector } from "react-redux"
import "../Style/Cart.css"
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
const Cart = () => {
  const { Cart } = useSelector(state => state.tinyclodeatil);
  const { TotalPrice } = useSelector(state => state.tinyclodeatil);
  const { Shipping } = useSelector(state => state.tinyclodeatil);
  const { Total } = useSelector(state => state.tinyclodeatil);

  // Conditional Shipping fee (0 if cart is empty)
  const shippingFee = Cart.length === 0 ? 0 : Shipping;

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
            <div className="cart-section2">
              {Cart.map((i) => (
                <div className='cart-section2-item' key={i.id}>
                  <div className="cart-item-img">
                    <img src={i.image} alt={i.title} />
                  </div>
                  <div className="cart-item-cont">
                    <h4>{i.title}</h4>
                    {/* Assuming you will dynamically display the size */}
                    <h4>Size: {i.size ? i.size : 'N/A'}</h4>
                    <h4>₹{i.price}</h4>
                    {/* <div className="cart-controller">
                        <div className="cart-qty">
                            <button>+</button>
                            <h5>1</h5>
                            <button>-</button>
                        </div>
                        <button><DeleteIcon/></button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
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
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart;
