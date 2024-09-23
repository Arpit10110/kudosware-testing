import React from 'react'
import "./Section1.css"
import section1Img from "../../assets/section1.png"
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
                    <h3>How it works?</h3>
                    <h3>Start Membership</h3>
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