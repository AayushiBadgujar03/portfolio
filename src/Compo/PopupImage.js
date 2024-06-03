import React from "react";
import { FaLink } from "react-icons/fa";
import "./PopupImage.css";

const PopupImage = ({ title, img, link }) => {
  return (
    <div>
      <div className="single-work text-center">
        <div className="work-image">
          <img src={img} alt="01" />
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupImage;
