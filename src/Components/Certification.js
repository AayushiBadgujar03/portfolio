import React from "react";

import "../CSS/Certifiction.css";
import intern from "../Assets/cirtficate/intern.jpg";
import mzos from "../Assets/cirtficate/mzios.jpg";
import infinity from "../Assets/cirtficate/infinity.jpg";
import PopupImage from "../Compo/PopupImage";
import elementary from "../Assets/cirtficate/Elementary_page-0001.jpg";
import intermediate from "../Assets/cirtficate/Intermediate_page-0001.jpg";

const Certification = () => {
  return (
    <div>
      <section id="work" className="work-area pt-125 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title pb-25">
                <h2 className="title">My Certificates</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage title="Internship" img={intern} link="" />
            </div> */}
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="BROADCAST ENGINEERING COSULTANTS INDIA LIMITED (BECIL)"
                img={infinity}
                link=""
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage title="MATRIX ZERO ONE SYSTEMS (MZOS)" img={mzos} link="" />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="ELEMENTARY GRADE DRAWING EXAMINATION"
                img={elementary}
                link=""
              />
            </div>
            <div className="pop col-lg-4 col-md-6 col-sm-6">
              <PopupImage
                title="ENTERMEDIATE GRADE DRAWING EXAMINATION"
                img={intermediate}
                link=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
