import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './VariationSlider.css';
import sliderbackground from "../../assets/sliderbackground.png";

const SliderCompo = ({twobtn,cont,Slidevalue}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle slider change
  const handleSliderChange = (value) => {
    setSelectedIndex(value);
  };

  const ageGroups =Slidevalue;

  return (
    <div className="slider-container">
        <div className="sec4-cont">
            <h3>DID YOU KNOW?</h3>
            <p>{cont}</p>
        </div>
      <div className="slider">
        <Slider
          min={0}
          max={ageGroups.length - 1}
          value={selectedIndex}
          marks={ageGroups.reduce((acc, group, index) => {
            acc[index] = group.age;
            return acc;
          }, {})}
          onChange={handleSliderChange}
          dotStyle={{ display: 'none' }}
          handleStyle={{
            borderColor: '#fda8a8',
            height: "5vw",
            width: "5vw",
            marginLeft: "-1rem",
            marginTop: "-3rem",
            backgroundImage: `url(${sliderbackground})`,
            opacity: "100%",
            backgroundRepeat:"no-repeat",
            backgroundPosition : "center",
          }}
          trackStyle={{ backgroundColor: '#64c3b8' }}
          railStyle={{ backgroundColor: '#f0f0f0' }}
        />
      </div>
      {
        twobtn ? 
      <div className="sec4btn-div">
        <button>Average Spent: {ageGroups[selectedIndex].AverageSpent}</button>
        <button>TinyClo: {ageGroups[selectedIndex].TinyClo}</button>
      </div>:
      <div className="sec4btn-div">
        <button>{ageGroups[selectedIndex].TinyClo}</button>
      </div>
      }
    </div>
  );
};

export default SliderCompo;
