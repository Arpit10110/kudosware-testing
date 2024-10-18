import React from 'react'
import "./Section1.css"
import section1Img from "../../assets/section1.png"
import {HashLink} from "react-router-hash-link"
import { Link } from 'react-router-dom'
const Section1 = () => {
  return (
    <>
    <div className="section1">
        <div className="section1-cont">
                <div className="sec1-cont1">
                    <h3>BABIES <span>GROW FAST</span></h3>
                    <h4>Simplify Your Life with Our </h4>
                    <h5>TinyClo Subscription</h5>
                </div>
                <div className="sec1-cont2">
                    <HashLink  to="/#howitworks">How it works?</HashLink>
                    <Link to="/choose-membership" >Start Membership</Link>
                </div>
        </div>
        <div className="section-Img">
            <img src={section1Img} alt="section1Img" />
        </div>

    </div>
    </>
  )
}

export default Section1