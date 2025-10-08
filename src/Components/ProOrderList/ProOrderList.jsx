import React, { useEffect, useState } from 'react'
import "./ProOrderList.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import Dialog from '@mui/material/Dialog';
import Loading from '../Loading/Loading';
const ProOrderList = () => {
    const { User_id } = useSelector(state => state.tinyclodeatil);
    const [open, setOpen] = useState(false);
    const [Orderdata,SetOrderdata] = useState([]);
    const [Showdetails,SetShowdetails] = useState();
    const [Isloading,SetIsloading] = useState(true);
    

    const OrderList = async()=>{
        try {
            const {data}=await axios.post(`${import.meta.env.VITE_Port}/getallorders`,{
                customerId : User_id
            })
            SetOrderdata(data.data);
            SetIsloading(false);
        } catch (error) {
            console.error(error)
        }
    }

    const handleClickOpen = async(index) => {
        setOpen(true);
        SetShowdetails(index);
        console.log(Orderdata[index].name);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        OrderList();
    }, [])
    
    const getdate = (x) =>{
        const date = new Date(x);
        const day = date.toLocaleString("en-GB", { day: "2-digit" });
        const month = date.toLocaleString("en-GB", { month: "short" });
        const year = date.getFullYear(); 
        return `${day} ${month},${year}`;
    }
  return (
    <>
        <Dialog fullWidth maxWidth={false} className="cleanclosetDialog"   PaperProps={{style: {width: "60%",margin: "0 auto"},}}  open={open} onClose={handleClose}>
               {
                open ?
                <div className='order-details-div' >
                    <h1 className='order-details-head'>Order Detail</h1>
                    <div className='order-deatils1'> <h1>{Orderdata[Showdetails].name} &thinsp; <span>{getdate(Orderdata[Showdetails].processed_at)}</span></h1> <h2>Paid</h2> </div>
                    <div className='order-deatils2'>
                        {
                            Orderdata[Showdetails].line_items.map((i,index)=>{
                                return(
                                    <h2 key={index}>{index+1}. {i.title} {`(${i.variant_title}) ₹${parseInt(i.price)}`}</h2>
                                )
                            })
                        }
                    </div>
                    <div className='order-deatils3'>
                        <h2>Total Amount <span>₹{parseInt(Orderdata[Showdetails].total_price)}</span></h2>
                    </div>
                    <div className='order-deatils4'>
                        <h2>Shipping Address- <span>{Orderdata[Showdetails].billing_address.address1}, {Orderdata[Showdetails].billing_address.city}, {Orderdata[Showdetails].billing_address.province}, {Orderdata[Showdetails].billing_address.zip}, {Orderdata[Showdetails].billing_address.country}</span></h2>
                    </div>
                    <div className='order-deatils3'>
                        <h2>Payment Done Through<span> {(Orderdata[Showdetails].payment_gateway_names[0]).toUpperCase()} </span></h2>
                    </div>
                </div>    :
                <span></span>
               }
        </Dialog>
    <div className="Orderbox-main">
            <div className="Orderbox-header">
                <h1>Order History</h1>
                <div className='editprofile-div' >
                <button>View All</button>
                </div>
            </div>
            {
                Isloading ?<Loading/>:
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
                                <div className='proorder-tablerowval' key={index}  onClick={()=>handleClickOpen(index)} >
                                    <span>{i.name}</span>
                                    <span>{formattedDateWithComma}</span>
                                    <span>Paid</span>
                                    <span>{parseInt(i.total_price)} INR</span>
                                </div>
                            )
                        })
                }
                </div>
            }
        </div>
   </>
  )
}

export default ProOrderList
