import React from "react";
import "../css/boxes.css"
import scooty from "../assets/images/scooty1.png";

const Boxes = () => {
  return (
      <div className="headDiv">
          <h1 className="header">Navigate Your Ride, Make the Right Stride!</h1>
      <div className="mainDiv">
        <div className="scootyImg1">
          <img src={scooty} />
          <div className="scootyImg1-div1">
            <h1>Flio Gen2 (2Kw)</h1>
            <p>Driving Excellence, Leading the Way</p>
          </div>
          <div className="scootyImg1-div2">
            <h3>Starting at ₹86,990/-</h3>
            <button>Learn More</button>
          </div>
        </div>
        <div className="scootyImg2">
          <img src={scooty} />

          <div className="scootyImg2-div1">
            <h1>Flio Gen2 (2Kw)</h1>
            <p>Driving Excellence, Leading the Way</p>
          </div>
          <div className="scootyImg2-div2">
            <h3>Starting at ₹86,990/-</h3>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
