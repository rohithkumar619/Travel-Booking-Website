import React from "react";
import "../pages/styles/Experience.css";
import experience from "../assets/images/experience.png";
const Experience = () => {
  return (
    <div className="experience">
      <div className="left-e">
        <span>Experience</span>
        <h4>With our all experience we will serve you</h4>
        <span>Book a tour with us and share your memories with us.</span>
        <div className="rates">
          <div>
            <span>12k+</span>
            <span>successful trip</span>
          </div>
          <div>
            <span>2k+</span>
            <span>Regular clients</span>
          </div>
          <div>
            <span>15</span>
            <span>Years experience</span>
          </div>
        </div>
      </div>
      <div className="right-e">
        <img src={experience} alt="" />
      </div>
    </div>
  );
};

export default Experience;
