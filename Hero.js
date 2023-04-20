import React from "react";
import FramePictures from "../Images/FramePictures.png";
import courseLogo from "../Images/courseLogo.svg";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-into">
          <h2>
            Start <span>Learning</span> From The Best Platform
          </h2>
          <p>
            Pick form over 100,000 online course with new additions published
            every month
          </p>
          <button className="hero-button">Join for Free</button>
        </div>

        <div className="hero-display">
          <div className="hero-courses">
            <img src={courseLogo} alt="course_logo_icon" />
            <div className="course-details">
              <p className="numb-col">6,40,000+</p>
              <p className="details">Free courses</p>
            </div>
          </div>
          <div className="hero-img">
            <img className="frames" src={FramePictures} alt="picture_fames" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
