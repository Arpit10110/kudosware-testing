import React from 'react'
import "./Section2.css"
//img
import sec2cot1 from "../../assets/sec3cot1.png"
import sec2cot2 from "../../assets/sec3cot2.png"
import sec2cot3 from "../../assets/sec3cot3.png"
import { useNavigate } from 'react-router-dom'
const Section2 = () => {
    const navigate = useNavigate();
  return (
   <>
   <div className="section2">
    <div className="sec2-cat1">
        <div className="sec2-cot-img">
            <img src={sec2cot1} alt="sec2cot1" />
        </div>
        <div className="sec2-cont">
            <h3>Kids Clothing</h3>
            <h4>Age (0-12)</h4>
            <h5 onClick={()=>navigate("/store")} >Explore<span>{">"}</span></h5>
        </div>
    </div>
    <div className="sec2-cat2">
        <div className="sec2-cot1-img">
            <img src={sec2cot2} alt="sec2cot1" />
        </div>
        <div className="sec2-cont">
            <h3>Equipments</h3>
            <h4>Age (0-12)</h4>
            <h5 onClick={()=>navigate("/store")} >Explore<span>{">"}</span></h5>
        </div>
    </div>
    <div className="sec2-cat3">
        <div className="sec2-cot1-img">
            <img src={sec2cot3} alt="sec2cot1" />
        </div>
        <div className="sec2-cont">
            <h3>Toys</h3>
            <h4>Age (0-12)</h4>
            <h5 onClick={()=>navigate("/store")}>Explore<span>{">"}</span></h5>
        </div>
    </div>
   </div>
   </>
  )
}

export default Section2