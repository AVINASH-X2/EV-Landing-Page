import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/slider.css";

import purple from "../assets/images/purple.png"
import image from "../assets/images/scooty1.png";
import white from "../assets/images/white.png"
import yellow from "../assets/images/yellow.png"

function App() {
  const config = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const products = [
    {
      img: purple,
      title: "Dolore Manga",
      text: "Lorem Ipsum door sit omet elit.",
    },
    {
      img: white,
      title: "Dolore Manga",
      text: "Lorem Ipsum door sit omet elit.",
    },
    {
      img: yellow,
      title: "Dolore Manga",
      text: "Lorem Ipsum door sit omet elit.",
    },
    {
      img: image,
      title: "Dolore Manga",
      text: "Lorem Ipsum door sit omet elit.",
    },
    {
      img: white,
      title: "Dolore Manga",
      text: "Lorem Ipsum door sit omet elit.",
    },
  ];

  const [settings, setSettings] = useState(config);

  const onChangeCenterMode = (e) => {
    if (e.target.checked) {
      setSettings({
        ...config,
        centerMode: true, //Enables center mode
        centerPadding: "50px", // Set center padding
      });
    } else {
      setSettings(config);
    }
  };

  return (
    <div className="slideMain">
      <div className="secondMain">
        <div className="contexts">
          <div className="head">
            <h1 className=" text-white">
              Browse the <span style={{ color: "yellow" }}>Products</span> below
            </h1>
          </div>
          <div className="centerMode text-white">
            {/* <h3>Carousel Slider in React</h3> */}

            {/* <label className="cb-centermode">
              <input
                type="checkbox"
                checked={settings.centerMode}
                onChange={onChangeCenterMode}
              />
              <span style={{ color: "#fff" }}>Enable Center Mode</span>
            </label> */}
          </div>
        </div>
        <div className="app">
          <Slider {...config}>
            {products.map((x, i) => {
              return (
                <div key={i} className="img-card">
                  <img className="img" src={x.img} />
                  <div className="card-body ">
                    <div className="card-title">{x.title}</div>
                    <div className="card-text">{x.text}</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* <ToDo /> */}
    </div>
  );
}

export default App;
