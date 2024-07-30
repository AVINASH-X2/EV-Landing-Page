import React, { useState } from "react";
import "../css/nav2.css";

const Nav2 = () => {
  const navComp = [
    { text: "Home", href: "www.google.com" },
    { text: "About", href: "www.google.com" },
    { text: "Contact", href: "www.google.com" },
    { text: "Products", href: "www.google.com" },
  ];

  const [nav, setNav] = useState({});

  return (
    <>
      <div className="navContainer">
        <ul className="navUl">
          {navComp.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav2;
