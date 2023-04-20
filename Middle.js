import React from "react";
import Star1 from "../Images/Star1.png";
import Eclipscircle from "../Images/Eclipscircle.svg";
import SearchIcon from "../Images/SearchIcon.svg";
import arrowDown from "../Images/arrowDown.png";
import { courses } from "./data";
import { deckOfCards } from "./data";

function Middle() {
  return (
    <div className="mid-container">
      <div className="digits">
        <div>
          <h3></h3>
          <p></p>
        </div>
        {courses.map((course) => (
          <div className="first-digit">
            <h3>{course.head}</h3>
            <p>{course.paragraph}</p>
          </div>
        ))}
      </div>

      <div className="inputs">
        <h4>Our Courses</h4>
        <p>Find Your Perfect Course</p>
        <div className="nest">
          <input
            className="search"
            type="search"
            placeholder="Search your course"
          />
          <span className="join">
            <img className="icon" src={SearchIcon} alt="search icon" />
          </span>
        </div>
        <img className="big-star" src={Star1} alt="decortaive star" />
      </div>

      <div className="mid-cards">
        <div>
          <img />
          <p></p>
        </div>
        {deckOfCards.map((card) => (
          <div className="cards">
            <img className={card.className} src={card.img} alt={card.alt} />
            <p>{card.paragraph}</p>
          </div>
        ))}
      </div>

      <div className="mid-end">
        <p>View all categories</p>
        <span>
          <img className="arrow" src={arrowDown} alt="Arrow icon" />
        </span>
        <img className="round" src={Eclipscircle} alt="decorative circle" />
        <img className="buttom-star" src={Star1} alt="decorative star" />
      </div>
    </div>
  );
}

export default Middle;
