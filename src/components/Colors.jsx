import React, { useState } from "react";
import "../css/colors.css"

const Colors = () => {
  const [color, setColr] = useState("");

    
    
  return (
    <div className="colorsMain">
      <div>
        <div className="context">
          <h1>Color Your World: Choose Your Color</h1>
          <p>
            Unvail Your ride: Paint it vivid paint it bold paint it your way
            awakened the painter of yours
          </p>
        </div>
        <div className="colors">
          <div className="red" onClick={() =>setColr("red")}>Red</div>
          <div className="green" onClick={() =>setColr("green")}>Green</div>
          <div className="white" onClick={() =>setColr("white")}>White</div>
          <div className="blue" onClick={() =>setColr("blue")}>Blue</div>
          <div className="yellow" onClick={() =>setColr("yellow")}>Yellow</div>
          <div className="pink" onClick={() =>setColr("pink")}>Pink</div>
        </div>
      </div>
      <div className="imgs">
              {setColr ? <h1>Your Color: { color }</h1> : <h1></h1>}
      </div>
    </div>
  );
};

export default Colors;
