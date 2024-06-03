import React from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-area  gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-25">
              <h2 className="title">Get In Touch</h2>
              <p></p>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center"
          style={{ paddingTop: "0px" }}
        >
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <FaMapMarker />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Address</h6>
                <p>Pimpri Chinchawad, Pune, 411035, India</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Phone</h6>
                <p>+91 95528 17104</p>
                <p></p>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-content">
                <h6 className="contact-title">Email</h6>
                <p>
                  <a href="mailto:aayushibadgujar03@gmail.com?subject=Mail from our Website">
                    aayushibadgujar03@gmail.com
                  </a>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row form">
          <div className="col-lg-6">
            <div className="contact-form">
              <form id="contact-form" action="mailto:jiteshsonar03@gmail.com">
                <div className="single-form">
                  <input type="text" name="name" placeholder="Name" />
                </div>

                <div className="single-form">
                  <input type="email" name="email" placeholder="Email" />
                </div>

                <div className="single-form">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>

                <p className="form-message"></p>
                <div className="single-form">
                  <button className="main-btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="col-lg-6">
            <div className="contact-map mt-60">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Mission%20District%2C%%20kothrud+Pune%2C%20CA%2C%20INDIA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
