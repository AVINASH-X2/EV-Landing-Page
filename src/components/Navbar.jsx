import React, { useEffect } from "react";
import "../css/navbar.css"

const Navbar = () => {
    

  return (
    <div className="navDiv" >
      <nav className="navbar bg-black navbar-expand-lg text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown text-white">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu bg-black">
                  <li>
                    <a className="dropdown-item text-white " href="#">
                      Bheem
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      zen2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      zen3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
