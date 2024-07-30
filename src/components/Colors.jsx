import React, { useState } from "react";
import "../css/colors.css";
import { Images } from "./Images";

const Colors = () => {
  const [colorImage, setColorImage] = useState(null);

  //Switch case approach...
  // const handleColorClick = (color) => {
  //   switch (color) {
  //     case "red":
  //       setColorImage(Images[0])
  //       break;

  //     case "white":
  //       setColorImage(Images[1])
  //       break;

  //     case "yellow":
  //       setColorImage(Images[2])
  //       break;

  //     case "green":
  //       setColorImage(Images[3])
  //       break;
      
  //     case "purple":
  //       setColorImage(Images[4]);
  //       break;
      
  //     default:
  //       break;
  //   }
  // };

  const handleColorClick = (color) => {
    const image = Images.find(img => img.className === `image-${color}`);
    setColorImage(image ? image.src : null);
  }

  return (
    <div className="colorsMain">
      <div className="maincontainer">
        <div className="context">
          <h1>Color Your World: Choose Your Color</h1>
          <p>
            Unvail Your ride: Paint it vivid paint it bold paint it your way
            awakened the painter of yours
          </p>
        </div>
        <div className="colors">
          <div className="red" onClick={() => handleColorClick("red")}>Red</div>
          <div className="white" onClick={() => handleColorClick("white")}>White</div>
          <div className="yellow" onClick={() => handleColorClick("yellow")}>Yellow</div>
          <div className="purple" onClick={() => handleColorClick("purple")}>Purple</div>
        </div>
      </div>

      {colorImage && <img src={ colorImage} alt="Selected Color" className="selectedImage"/>}
      
    </div>
  );
};

export default Colors;
