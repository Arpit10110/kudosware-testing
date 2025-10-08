import React,{useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from "../Components/Footer/Footer.jsx"
import {Link} from "react-router-dom"
import cleansce1Img from "../assets/cleansce1Img.png"
import cleanSec3Img from "../assets/cleanSec3Img.png"
import cleanSec4Img from "../assets/cleanSec4Img.png"
import cleansec5Img1 from "../assets/cleansec5Img1.png"
import cleansec5Img2 from "../assets/cleansec5Img2.png"
import cleansec5Img3 from "../assets/cleansec5Img3.png"
import "../Style/Clean-out.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Dialog from '@mui/material/Dialog';
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const CleanOutCloset = () => {
  const [open, setOpen] = useState(false);
  const [state, handleSubmit] = useForm("mldevyej");
  if (state.succeeded) {
    toast.success("message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
    document.getElementById("myForm").reset();
  } 

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};


  return (
    <>
    <Navbar/>
    <div className='clean-out-main'>
        <div className="clean-sec1">
          <div className="clean-sec1-cont">
              <h2>Clean Out Your Child Closet</h2>
              <p>Send us your child's outgrown garments at no cost to you—and earn rewards too!</p>
              <button onClick={handleClickOpen} >Get Your Kit</button>
              <Dialog fullWidth maxWidth={false} className="cleanclosetDialog"   PaperProps={{style: {width: "60%",margin: "0 auto"},}}  open={open} onClose={handleClose}>
                <form id="myForm" onSubmit={handleSubmit} className="cleancloset-form">
                  <h2>Full Name</h2>
                  <input  type="text" name='FullName' required/>
                  <h2>Email</h2>
                  <input  type="text" name='Email' required/>
                  <h2>Phone no.</h2>
                  <input  type="text" name='Phone' required/>
                  <h2>Describe Your Closet</h2>
                  <textarea
                    name="Description"
                    placeholder="we have 20+ or 20kg+ clothes upto 6 month of baby, we have 5 pair shoes, a stroller and 10 soft toys in okay condition.."
                    required
                  ></textarea>
                  <div className="cleancloset-form-btns">
                    <button type="submit">Submit</button>
                    <button onClick={handleClose}>Cancel</button>
                  </div>
                </form>
              </Dialog>
          </div>
          <div className="clean-sec1-img">
            <img src={cleansce1Img} alt="cleansce1Img" />
          </div>
        </div>
        <div className="clean-sec2">
          <h2>Offload Outgrown Items Sustainably</h2>
          <p>Baby clothes belong on babies, not in storage bins—or, (gasp!) landfill. When you donate them to us, you can be certain they'll stay in circulation or retired in a responsible way.</p>
        </div>
        <div className="clean-sec3">
            <img src={cleanSec3Img} alt="cleanSec3Img" />
            <h2>Refresh Their Closet In <span>3 Simple Steps</span></h2>
        </div>
        <div className="clean-sec4">
          <img src={cleanSec4Img} alt="cleanSec4Img" />
        </div>
        <div className="clean-sec5">
          <Carousel
            className="caro"
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            showIndicators ={false}
            showThumbs={false}
            interval={2000}
          >
              <div className="clean-sec5-box1">
                <div className="clean-sec5-box1-cont">
                  <h3>SKIP THE SORTING</h3>
                  <p>To make things easy for you, we'll accept any garment (up to size 12) that hits our doorstep, no matter how worn, stained, or damaged it is. Bonus: This helps ensure that nothing goes to landfill too!</p>
                </div>
                <div className="clean-sec5-box1-img">
                  <img src={cleansec5Img1} alt="cleansec5Img1" />
                </div>
              </div>
              <div className="clean-sec5-box2">
                <div className="clean-sec5-box2-cont">
                  <h3>CELEBRATE YOUR IMPACT</h3>
                  <p>Since our launch, we've diverted well over 500 lbs of textiles from landfills and saved 1.4 million gallons of water—and we've only just begun. Our circular model uses thousands of garments already in circulation and helps keep them there. In fact, we never discard or trash clothing. Instead, we work with communities, charities and textile recyclers to repurpose what we can't use.</p>
                </div>
                <div className="clean-sec5-box1-img">
                  <img src={cleansec5Img2} alt="cleansec5Img1" />
                </div>
              </div>
              <div className="clean-sec5-box1">
                <div className="clean-sec5-box1-cont">
                  <h3>REWARD YOURSELF</h3>
                  <p>You've checked, "closet clean-out" off your list. Hooray! Now rewards are in order. Restock your little one's wardrobe with clothes that always fit when you apply your credits toward membership or a seasonal rental.</p>
                </div>
                <div className="clean-sec5-box1-img">
                  <img src={cleansec5Img3} alt="cleansec5Img1" />
                </div>
              </div>
          </Carousel>
        </div>
        <div className="clean-sec6">
          <h2>READY FOR A <span>CLEAN CLOSET?</span></h2>
          <Link onClick={handleClickOpen} to="#" >Get Your Kit</Link>
        </div>
        <div className="clean-sec7">
          <h2>GROW WITH US</h2>
          <h5>Sign up to get subscriber only deals, first access to new products, insightful parenting content and more.</h5>
          <div className='clean-sec7-Input' >
          <input type="text" placeholder='email@example.com' /> <button>SIGN UP</button>
          </div>
        </div>
        <Footer/>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </>
  )
}

export default CleanOutCloset