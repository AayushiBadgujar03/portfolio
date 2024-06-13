import React from "react";

import PortImage from "../Compo/PortImage";
import "../CSS/Portfolio.css";
import intern from "../Assets/cirtficate/intern.jpg";
import portfolio from "../Assets/portfolio/onboarding.png";
import royalcafe from "../Assets/portfolio/royalcafe.png";
import creamycreation from "../Assets/portfolio/creamycreation.png";

const Portfolio = () => {
  return (
    <section id="contact" className="contact-area  gray-bg">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center pb-25">
            <h2 className="title">MY WORK</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="row" style={{ margin: "0" }}>
        <div className="pop col-lg-4 col-md-6 col-sm-6">
          <PortImage title="Internship" img={intern} link="" gitlink="" />
        </div>
        <div className="pop col-lg-4 col-md-6 col-sm-6">
          <PortImage
            title="ONBOARDING APP DESIGN (UI/UX)"
            img={portfolio}
            gitlink=""
            link="https://www.figma.com/design/BMt0bpDi1ycAKqxzqvZ3G5/OnBording_Flow?node-id=0-1&t=2MiKVRaemB3uGIev-1"
          />
        </div>
        <div className="pop col-lg-4 col-md-6 col-sm-6">
          <PortImage
            title="ROYAL CAFE WEB SITE"
            img={royalcafe}
            gitlink="https://github.com/AayushiBadgujar03/Cafe_Royal"
            link="https://caferoyall.netlify.app/"
          />
        </div>
        <div className="pop col-lg-4 col-md-6 col-sm-6">
          <PortImage
            title="CREAMY CREATION WEB SITE"
            img={creamycreation}
            gitlink="https://github.com/AayushiBadgujar03/creamycreation"
            link="https://creamycreation.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
