import React from "react";
import Tick from "../Images/Tick.svg";
import FrameGlobeKid from "../Images/FrameGlobeKid.svg";
import FrameSupKid from "../Images/FrameSupKid.svg";
import Eclipcircle from "../Images/Eclipscircle.svg";
import EclipseGreen from "../Images/EclipseGreen.svg";

function Explore() {
  return (
    <>
      <div className="exp-container">
        <div className="exp-tails">
          <h5>Open Platform And Many Courses For You</h5>
          <p>
            It is a long established fects that already will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <div className="exp-start">
            <img
              className="checkIcon"
              src={Tick}
              alt="Icon made by Pixel perfect from www.flaticon.com"
            />
            <span className="score">9/10 Satisfaction Score</span>
            <img
              className="checkIcon"
              src={Tick}
              alt="Icon made by Pixel perfect from www.flaticon.com"
            />
            <span className="score">98% Completion Rate</span>
          </div>
          <button className="exp-btn">Explore Courses</button>
          <img className="exp-round1" src={Eclipcircle} alt="circle" />
        </div>
        <div className="exp-frames">
          <img
            className="exp-bigframe"
            src={FrameGlobeKid}
            alt="Picture_of_a_child"
          />
          <img
            className="exp-surpframe"
            src={FrameSupKid}
            alt="Picture_of_a_child"
          />
          <img className="exp-round2" src={EclipseGreen} alt="circle" />
        </div>
      </div>
    </>
  );
}

export default Explore;
