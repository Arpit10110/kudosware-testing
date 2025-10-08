import React,{useEffect, useState} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Components/Footer/Footer';
import "../Style/Productdetail.css"
import Loading from '../Components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Productdetail = () => {
    const { id } = useParams(); 
    const actualId = id.slice(3,) 
    const [prodata,Setprodata] = useState([]);
    const [loading,SteLoading] = useState(true);
    const [tags,setTags] = useState([]);
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    const dispatch = useDispatch();

    const addtocartHandler = (variant) => {
      console.log(variant);
  
      const itemTags = tags.split(', ');
      let color = '';
      let size = '';
      itemTags.forEach(tag => {
        if (tag.startsWith('Colour:')) {
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
         size:size,
         variantopt:variant.title
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

    const fetchproductdetail = async()=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/productdetail`,{
                prodid:actualId
            })
            Setprodata(data.data);
            setTags(data.data.tags)
            setTitle(data.data.title)
            setImage(data.data.image.src)
            console.log(data.data.tags);
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
                    <button onClick={() => addtocartHandler(prodata.variants[1])}>Buy Now ₹{Math.floor(prodata.variants[1].price)}</button>
                    <button  onClick={() => addtocartHandler(prodata.variants[0])}>Rent ₹{Math.floor(prodata.variants[0].price)}</button>
                </div>
            </div>
        </div>
      }
      </div>
      <Footer/>
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

export default Productdetail;
