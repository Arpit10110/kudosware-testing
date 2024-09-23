import React from 'react'
import "./Footer.css"
//img
import footerImg from "../../assets/footerImg.png"
const Footer = () => {
  return (
   <footer>
      <div className="footer-div">
        <div className="footerImg">
        <img src={footerImg} alt="footerImg" />
        </div>
        <div className="footerCont">
          <div className="footercont1">
            <h2>Our Company</h2>
            <p>Blog</p>
            <p>About Us</p>
            <p>Careers</p>
          </div>
          <div className="footercont1">

            <h2>PRODUCTS</h2>
            <p>Subscription Plans</p>
            <p>Clothing</p>
            <p>Equipments</p>
            <p>Toys</p>
            <p>Clean Out Closet</p>
          </div>
          <h6>©2024 TinyClo. All rights reserved</h6>
        </div>
      </div>
   </footer>
  )
}

export default Footer
