import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/Home.css";
import "../Styles.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

/* ==========Images============== */
import shapeOne from "../Assets/back/shape/shapeOne.png";
import shapeTwo from "../Assets/back/shape/shapeTwo.png";
import shapeThree from "../Assets/back/shape/shapeThree.png";
import shapeFour from "../Assets/back/shape/shapeFour.png";
import shapeFive from "../Assets/back/shape/shapeFive.png";
import ill from "../Assets/back/shape/ill7.jpg";
import react from "../Assets/back/shape/react.png";

const Home = () => {
  return (
    <div>
      <div id="parallax" class="header-content d-flex align-items-center">
        <div class="header-shape shape-one layer" data-depth="0.10">
          <img src={shapeOne} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-tow layer" data-depth="0.30">
          <img src={shapeTwo} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-three layer" data-depth="0.40">
          <img src={shapeThree} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-fore layer" data-depth="0.60">
          <img
            src={react}
            alt="Shape"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-five layer" data-depth="0.20">
          <img
            src={shapeFour}
            alt="Shape"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-six layer" data-depth="0.15">
          <img src={shapeFour} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-seven layer" data-depth="0.50">
          <img src={shapeFive} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-eight layer" data-depth="0.40">
          <img src={shapeThree} alt="Shape" />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-nine layer" data-depth="0.20">
          <img src={react} alt="Shape" style={{ height: "100px" }} />
        </div>
        {/*-- header shape --*/}
        <div class="header-shape shape-ten layer" data-depth="0.30">
          <img src={shapeThree} alt="Shape" />
        </div>

        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6">
              <div class="header-content-right">
                <h4 class="sub-title">Hello, I’m</h4>
                <h1 class="title">AAYUSHI BADGUJAR</h1>
                <p>A UI Designer & Web Developer</p>
                {/* <a
                  class="main-btn"
                  href="https://drive.google.com/file/d/1hjqR7aORWXYTkCuDkfkWlksSDoVASg8F/view?usp=sharing"
                >
                  DOWNLOAD CV
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 offset-xl-1">
              <div class="header-image d-none d-lg-block">
                <img src={ill} alt="hero" />
              </div>
            </div>
          </div>
        </div>

        <div class="header-social">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-social-icon">
                  <ul>
                    <li>
                      <a href="https://instagram.com/_mr_j_e_e_t_0_4_?utm_medium=copy_link">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/AayushiBadgujar03">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/aayushi-badgujar-265b471a5/">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
