import React, { useState } from "react";
import "../css/footer.css";
import { TiPlusOutline } from "react-icons/ti";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Icons = [
  {icon: CiFacebook, href:"www.google.com"},
  {icon: FaXTwitter, href:"www.google.com"},
  {icon: FaInstagram, href:"www.google.com"},
  {icon: CiLinkedin, href:"www.google.com"},
]


const footerData = {
  products: {
    links: [
      { text: "Home", href: "www.google.com" },
      { text: "Gen2", href: "www.google.com" },
      { text: "Bheem", href: "www.google.com" },
      { text: "Filo+", href: "www.google.com" },
    ],
  },
  shop: {
    links: [{ text: "Reverse Now", href: "www.google.com" }],
  },
  dealership: {
    links: [
      { text: "Retail Partnership", href: "www.google.com" },
      { text: "Networks", href: "www.google.com" },
    ],
  },
  support: {
    links: [{ text: "Help & Support", href: "www.google.com" }],
  },
};


const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderLinks = (links) => {
    return (
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index}>
            <a className="text-white" href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="footer-main h-lvh bg-black">
      <h1>Footer</h1>
      <div className="footer-second-main">
        {Object.keys(footerData).map((section, index) => (
          <div key={index} className="items m-4">
            <div className="flex justify-content-between">
              <h3 className="text-white">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              {expandedSections[section] ? (
                <FaMinus
                  className="bg-white hover:cursor-pointer"
                  onClick={() => toggleSection(section)}
                />
              ) : (
                <FaPlus
                  className="bg-white hover:cursor-pointer"
                  onClick={() => toggleSection(section)}
                />
              )}
            </div>
            {expandedSections[section] &&
              renderLinks(footerData[section].links)}
          </div>
        ))}
      </div>

      <div className="company-heading flex text-white">
        <h1 className="company ">
          <span style={{ color: "red" }}>O</span>zotec
        </h1>
      </div>

      <div className="fourth-class">
        <ul className=" flex text-white gap-5 ml-5 mt-5">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
      </div>

      <div className=" text-white ml-4">
       <p>© 2023 Ozotec Automobile Pvt Ltd. All Rights Reserved</p>
      </div>

      <div className=" flex mt-2 ml-3">
        {Icons.map(({icon: Icon, href}, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" >
            <Icon className=" text-white m-1" />
         </a>
        ))}
      </div>
        
    </div>
  );
};

export default Footer;
