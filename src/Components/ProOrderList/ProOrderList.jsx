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
                        Orderdata.map((i,index)=>{
                            const date = new Date(i.processed_at);
                            const formattedDate = date.toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "2-digit",
                            });
                            const formattedDateWithComma = formattedDate.replace(/(\d{2}\s\w{3})\s(\d{2})/, "$1, $2");
                            return(
                                <div className='proorder-tablerowval' key={index} >
                                    <span>{i.name}</span>
                                    <span>{formattedDateWithComma}</span>
                                    <span>Paid</span>
                                    <span>{parseInt(i.total_price)} INR</span>
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
