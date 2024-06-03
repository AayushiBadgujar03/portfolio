import React from "react";
import "./PortImage.css";
import { FaLink, FaGithub } from "react-icons/fa";

const PortImage = ({ title, img, gitlink, link }) => {
  return (
    <div>
      <div className="single-work text-center">
        <div className="work-image">
          <img src={img} alt="" />
        </div>
        <div className="work-overlay">
          <div className="work-content">
            <h3 className="work-title">{title}</h3>
            <ul>
              <li>
                <a href={link}>
                  <FaLink />
                </a>
              </li>
              <li>
                <a href={gitlink}>
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortImage;
