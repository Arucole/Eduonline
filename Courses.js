import React from "react";
import { courseCard } from "./data";

function Courses() {
  return (
    <>
      <div className="courseContainer">
        <h2>Explore Most Popular Courses</h2>
        <p className="choose">
          Choose from 155,000 online videos courses with new additions published
          every month
        </p>
        <ul>
          <li className="graphic">Graphic Design</li>
          <li className="graphic">Website Design</li>
          <li className="graphic">UI/UX Design</li>
          <li className="graphic">Web Development</li>
          <li className="graphic">Front-End Development</li>
        </ul>
        <div className="line"></div>
        <div className="courseCardHolder">
          <div>
            <img />
            <h6></h6>
            <img />
            <span></span>
            <div>
              <p></p>
              <img />
              <span></span>
            </div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          {courseCard.map((card) => (
            <div className="courseCards">
              <img className={card.className1} src={card.img} alt={card.alt1} />
              <h6 className="headCard">{card.head}</h6>
              <img
                className={card.className2}
                src={card.profileimg}
                alt={card.alt2}
              />
              <span className="name">{card.name}</span>
              <div className="hold">
                <p className="numb">{card.graph1}</p>
                <img
                  className={card.className3}
                  src={card.ratingimg}
                  alt={card.alt3}
                />
                <span className="last">{card.graph2}</span>
              </div>
              <div className="close">
                <p>{card.graph3}</p>
                <p className="lineThrough">{card.graph4}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
