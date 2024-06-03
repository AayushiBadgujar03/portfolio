import React, { useState } from "react";
import "../CSS/Navbar.css";
import {
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav fixed-top">
        {/* 1st logo part  */}

        <div className="logo">
          <Link to="/">
            <h2>
              <span>A</span>AYUSHI
              <span>B</span>ADGUJAR
            </h2>
          </Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/certification">CERTIFICATION</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://instagram.com/_mr_j_e_e_t_0_4_?utm_medium=copy_link">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jitesh-sonar-a727031a2">
                <FaLinkedin className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <span onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
