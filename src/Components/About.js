import React from "react";
import "../CSS/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import {
  FaCalendar,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import Progress from "../Compo/Progress";
import call from "../Assets/back/shape/call-to-action.jpg";

/* images */
import html from "../Assets/Skicons/html-5-48.png";
import css from "../Assets/Skicons/css3-48.png";
import js from "../Assets/Skicons/js.png";
import figma from "../Assets/Skicons/figma.png";
import ill from "../Assets/Skicons/illustrator.png";
import adobe from "../Assets/Skicons/xd.png";
import photoshope from "../Assets/Skicons/photoshop.png"

const About = () => {
  return (
    <div>
      <section id="about" className="about-area pt-125 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">About Me</h2>
                <p style={{ alignContent: "center", marginBottom: "50px" }}>
                  “Design is not just what it looks like and feels like. Design
                  is how it works.”
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50">
                <h5 className="about-title">Hi There! I'm Aayushi Badgujar</h5>
                <p>
                  A UI Designer & Web Developer from Pune, Maharashtra. I did my
                  Diploma in Government Polytechnic, Jalgaon and undergraduate
                  course in BE Electronics and Telecommunication Technology at
                  SSBT's College Of Engineering And Technology, Bambhori,
                  Jalgaon. Affiliated to K.B.C. North Maharashtra University,
                  Jalgaon.
                </p>
                <ul className="clearfix" style={{ marginBottom: "50px" }}>
                  <li>
                    <div className="single-info ">
                      <div className="info-icon">
                        <FaCalendar />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Date of birth:</span> 03 August 2000
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaEnvelope />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Email: </span>
                          <a href="mailto:aayushibadgujar02@gmail.com?subject=Mail from our Website">
                            aayushibadgujar02@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <FaLocationArrow />
                      </div>
                      <div className="info-text">
                        <p>
                          <span>Location:</span> Pimpri Chinchawad, Pune, 411035
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              {/* <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{fontWeight: 700 }}>C</h5>
                  </div>
                  <div>
                    <img className="ico" src={cpp} alt="" />
                    <img className="ico" src={c} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="70" />
                </div>
              </div> */}

              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>HTML, CSS & JAVASCRIPT</h5>
                  </div>
                  <div>
                    <img className="ico" src={html} alt="" />
                    <img className="ico" src={css} alt="" />
                    <img className="ico" src={js} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="85" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>UI/UX</h5>
                  </div>
                  <div>
                    <h5 style={{ color: "blue", fontWeight: 700 }}>UI/UX</h5>
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="80" />
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>Figma</h5>
                  </div>
                  <div>
                    <img className="ico" src={figma} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="80" />
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>Illustrator</h5>
                  </div>
                  <div>
                    <img className="ico" src={ill} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="85" />
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>Photoshop</h5>
                  </div>
                  <div>
                    <img className="ico" src={photoshope} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="85" />
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <div>
                    <h5 style={{ fontWeight: 700 }}>Adobe XD</h5>
                  </div>
                  <div>
                    <img className="ico" src={adobe} alt="" />
                  </div>
                </div>
                <div className="skill-percentage">
                  <Progress done="70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  --====== CALL TO ACTION PART START ====== */}

      <section
        id="call-to-action"
        className="call-to-action pt-125 pb-130 bg_cover"
        style={{ backgroundImage: `url(${call})`, padding: "20px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9">
              <div className="call-action-content text-center">
                <h2 className="action-title">Have any project on mind?</h2>
                <p>If you can Think it, I can Develope it.</p>
                <ul>
                  {/* <li>
                    <a
                      className="main-btn custom"
                      href="https://drive.google.com/file/d/1hjqR7aORWXYTkCuDkfkWlksSDoVASg8F/view?usp=sharing"
                    >
                      download cv
                    </a>
                  </li> */}

                  <Link to="/contact">
                    <li>
                      <p className="main-btn custom-2">Contact Me</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
