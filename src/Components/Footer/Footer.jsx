import React from 'react'
import "./Footer.css"
//img
import footerImg from "../../assets/footerImg.png"
import { useNavigate } from "react-router-dom"
const Footer = () => {
  const navigate = useNavigate();
  return (
   <footer>
      <div className="footer-div">
        <div className="footerImg">
        <img src={footerImg} alt="footerImg" />
        </div>
        <div className="footerCont">
          <div className="footercont1">
            <h2>Our Company</h2>
            <p onClick={()=>navigate("/blogs")}>Blog</p>
            <p onClick={()=>navigate("/about")} >About Us</p>
            <p>Careers</p>
          </div>
          <div className="footercont1">

            <h2>PRODUCTS</h2>
            <p onClick={()=>navigate("/about")} >Subscription Plans</p>
            <p onClick={()=>navigate("/store")} >Clothing</p>
            <p onClick={()=>navigate("/store/accessories")} >Equipments</p>
            <p onClick={()=>navigate("/store/toys")} >Toys</p>
            <p onClick={()=>navigate("/clean-out-closet")} >Clean Out Closet</p>
          </div>
          <h6>©2024 TinyClo. All rights reserved</h6>
        </div>
      </div>
   </footer>
  )
}

export default Footer
