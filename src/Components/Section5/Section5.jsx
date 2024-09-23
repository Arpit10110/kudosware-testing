import React from 'react'
import "./section5.css"
//img
import sec5Img1 from "../../assets/sec5Img1.png"
import sec5Img2 from "../../assets/sec5Img2.png"
const Section5 = () => {
  return (
   <>
   <div className='section5' >
    <h2>Membership Plans</h2>
    <div className="sec5box-div">
        <div className="sec5box">
            <div className="sec5Img">
                <img src={sec5Img1} alt="sec5Img1" />
            </div>
            <div className="sec5cont1">
                <h4>TinyClo PREMIUM PLAN</h4>
                <p>Apparels from top-tier sustainable brands, chosen by our experts</p>
                <h5>from $49.00</h5>
            </div>
            <div className="sec5cont2">
                <button>Choose Membership</button>
            </div>
        </div>
        <div className="sec5box">
            <div className="sec5Img">
                <img src={sec5Img2} alt="sec5Img1" />
            </div>
            <div className="sec5cont1">
                <h4 className='another-pp' >TinyClo ESSENTIAL PLAN</h4>
                <p>Curated essentials, chosen by our experts</p>
                <h5>from $49.00</h5>
            </div>
            <div className="sec5cont2-another">
                <button>Choose Membership</button>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Section5
