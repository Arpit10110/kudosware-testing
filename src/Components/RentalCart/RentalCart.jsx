import React,{useEffect} from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const RentalCart = ({Cart,deleteItem,decreaseQty,increseQty}) => {
  const [Cartdata,SetCartdata] = useState([])
  console.log(Cart)

  useEffect(() => {
   const arr = Cart.filter((i)=>i.variantopt == "Rent");
   SetCartdata(arr);
  }, [Cart])
  return (
    <div className="rentcart-maindiv">
      <h1 className='head-cart-inner'>Rental <span>Purchase</span></h1>
      {
        Cartdata.length === 0? <>
        <h2>No Item in Cart</h2>
        </>:
        <>
        {Cartdata.map((i) => (
                  <div className='cart-section2-item' key={i.id}>
                    <div className="cart-item-img">
                      <img src={i.image} alt={i.title} />
                    </div>
                    <div className="cart-item-cont">
                      <h4>{i.title}</h4>
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
        </>
      }
  </div>
  )
}

export default RentalCart