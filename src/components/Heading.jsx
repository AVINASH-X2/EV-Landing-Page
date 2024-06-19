import React from "react";
import "../css/heading.css";
import scooty from "../assets/images/scooty1.png";

const Heading = () => {
  return (
    <div>
      <div className="heading-bg">
        <div className="context">
          <div className="context-jr">
            <h1>Your Journey Upgraded By</h1>
          </div>
          <div className="context-jr2">
            <h1 className="x2Gen">Filo Gen2</h1>
            <button>₹79,999/-</button>
            <h4 className="effective">*Effective Onroad Price</h4>
          </div>
        </div>
        <div className="scootyImg">
          <img src={scooty} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
