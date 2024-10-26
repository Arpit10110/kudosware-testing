import React, { useEffect, useState } from 'react'
import "./ProOrderList.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
const ProOrderList = () => {
    const { User_id } = useSelector(state => state.tinyclodeatil);
    const [Orderdata,SetOrderdata] = useState([]);

    const OrderList = async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/getallorders`,{
                customerId : User_id
            })
            console.log(data);
            SetOrderdata(data.data);
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        OrderList();
    }, [])
    
  return (
    <>
    <div className="Orderbox-main">
            <div className="Orderbox-header">
                <h1>Order History</h1>
                <div className='editprofile-div' >
                <button>View All</button>
                </div>
            </div>
            <div className="pro-list-order">
                <div className='proorder-tablerow' >
                    <span>Order</span>
                    <span>Date</span>
                    <span>Payment Status</span>
                    <span>Total</span>
                </div>
                {
                        Orderdata.map((i)=>{
                            return(
                                <div className='proorder-tablerow' >
                                    <span>#214</span>
                                    <span>Date</span>
                                    <span>Payment Status</span>
                                    <span>Total</span>
                                </div>
                            )
                        })
                }
            </div>
        </div>
   </>
  )
}

export default ProOrderList
