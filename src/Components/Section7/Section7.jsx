import React from 'react'
import "./Section7.css"
//img
import sec7Img1 from "../../assets/sec7Img1.png"
import sec7Img2 from "../../assets/sec7Img2.png"
import sec7Img3 from "../../assets/sec7Img3.png"
import sec7Img4 from "../../assets/sec7Img4.png"
import sec7Img5 from "../../assets/sec7Img5.png"
const Section7 = () => {
  return (
    <>
    <div className="section7">
        <h2>As featured in</h2>
        <div className="section7Img">
            <img src={sec7Img1} alt="sec7Img1" />
            <img src={sec7Img2} alt="sec7Img1" />
            <img src={sec7Img3} alt="sec7Img1" />
            <img src={sec7Img4} alt="sec7Img1" />
            <img src={sec7Img5} alt="sec7Img1" />
        </div>
    </div>
    </>
  )
}

export default Section7