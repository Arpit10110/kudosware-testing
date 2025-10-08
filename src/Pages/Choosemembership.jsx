import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "../Style/Choosemembership.css"
import { Link } from 'react-router-dom'
//img
import PremiumImg from "../assets/PremiumImg.png"
import EsentialImg from "../assets/EsentialImg.png"
import choosememBackImg from "../assets/choosememBackImg.png"
import workingImg1 from "../assets/workingImg1.png"
import workingImg2 from "../assets/workingImg2.png"
import workingImg3 from "../assets/workingImg3.png"
import workingImg4 from "../assets/workingImg4.png"
import allstorelink from "../assets/all-store-link.png"  
import storeboyslink from "../assets/store-boys-link.png"  
import storegirlslink from "../assets/store-girls-link.png"  
import storeacclink from "../assets/store-acc-link.png"  
import storetoyslink from "../assets/store-toys-link.png"  
import Footer from '../Components/Footer/Footer'
const Choosemembership = () => {
  return (
   <>
    <Navbar/>
    <div className="choosemem-main">
        <div className="banner-chosemem">
            <h1>Our<span> Rental </span>Membership</h1>
            <h2>Keep up with your growing baby's wardrobe from</h2>
            <h2> 0 to age 5 - Sustainability! </h2>
        </div>
        <div className="choosememe-cardmain">
            <div className="choosemem-card">
                <div className="chhosememe-card-img">
                <img src={PremiumImg} alt="card" />
                </div>
                <div className="choosememe-cont">
                    <h1>TinyClo PREMIUM PLAN</h1>
                    <h2>from $49.00</h2>
                    <h4>Get a curated mix of premium brands that parents love.</h4>
                    <h4>•Unlimited Swaps</h4>
                    <h4>•Free Shipping, Both ways</h4>
                    <h4>•Cancel Anytime</h4>
                    <Link to="#" >CHOOSE MEMBERSHIP</Link>
                </div>
            </div>
            <div className="choosemem-card">
            <div className="chhosememe-card-img">
                <img src={EsentialImg} alt="card" />
            </div>
                <div className="choosememe-cont">
                    <h1>TinyClo ESSENTIAL PLAN</h1>
                    <h2>from $32.00</h2>
                    <h4>Get a curated mix of premium brands that parents love.</h4>
                    <h4>•Unlimited Swaps</h4>
                    <h4>•Free Shipping, Both ways</h4>
                    <h4>•Cancel Anytime</h4>
                    <Link to="#" >CHOOSE MEMBERSHIP</Link>
                </div>
            </div>
        </div>
        <div className="chooseme-downCont">
                <h1>What's Included In A Membership</h1>
                <img className='choosememBackImg' src={choosememBackImg} alt=" " />
                <h2>Some Brands We Work With</h2>
                <div className="working-brand">
                    <img src={workingImg1} alt="workingImg1" />
                    <img src={workingImg2} alt="workingImg1" />
                    <img src={workingImg3} alt="workingImg1" />
                    <img src={workingImg4} alt="workingImg1" />
                </div>
        </div>
        <h3 className='choosemem-head' >What are you looking for?</h3>
        <div className="store-nav">
        <Link to="/store" className='store-link' >
        <img src={allstorelink} alt="all" />
        <h6>All</h6>
        </Link>
        <Link to="/store/boys" className='store-link' >
        <img src={storeboyslink} alt="boys" />
        <h6>Boys</h6>
        </Link>
        <Link to="/store/girls" className='store-link' >
        <img src={storegirlslink} alt="boys" />
        <h6>Girls</h6>
        </Link>
        <Link to="/store/accessories" className='store-link' >
        <img src={storeacclink} alt="accessories" />
        <h6>Accessories</h6>
        </Link>
        <Link to="/store/toys" className='store-link' >
        <img src={storetoyslink} alt="toys" />
        <h6>Toys</h6>
        </Link>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Choosemembership
