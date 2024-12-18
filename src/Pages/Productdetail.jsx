import React,{useEffect, useState} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';
import "../Style/Productdetail.css"
import Loading from '../Components/Loading/Loading';
const Productdetail = () => {
    const { id } = useParams(); 
    const actualId = id.slice(3,) 
    const [prodata,Setprodata] = useState([]);
    const [loading,SteLoading] = useState(true);

    const fetchproductdetail = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/productdetail`,{
                prodid:actualId
            })
            Setprodata(data.data);
            console.log(data);
            SteLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      fetchproductdetail();
    }, [])
    

  return (
    <>
      <Navbar />
      <div className='Prod-detail-main'>
      {
        loading? <Loading/> :
        <div className='Prod-detail-box'>
            <div className='prod-detail-img'>
                <img src={prodata.image.src} alt="img" />
            </div>
            <div className='Prod-detail-cont'>
                <h2>{prodata.title}</h2>
                <div className='Prod-detail-price'>
                    <h3>Buy: ₹{Math.floor(prodata.variants[1].price)}</h3>
                    <h3>Rent: ₹{Math.floor(prodata.variants[0].price)}</h3>
                </div>
                <div className='Prod-detail-addtocart'>
                    <button>Add to Cart ₹{Math.floor(prodata.variants[1].price)}</button>
                    <button>Add to Cart ₹{Math.floor(prodata.variants[0].price)}</button>
                </div>
            </div>
        </div>
      }
      </div>
      <Footer/>
    </>
  );
};

export default Productdetail;
