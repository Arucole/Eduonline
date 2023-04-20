import React from "react";
import { instinct } from "./data";

function Instructor() {
  return (
    <>
      <div className="instruContainer">
        <div className="hook">
          <h3>Professional Instructor</h3>
          <p>
            EduLearn Offers the best classes from the world's best
            practitioners.
          </p>
        </div>
        <div className="pick">
          <div>
            <img />
            <p></p>
            <p></p>
          </div>
          {instinct.map((prof) => (
            <div className="pictures">
              <img className={prof.className} src={prof.img} alt={prof.alt} />
              <p className="firstgraph">{prof.name}</p>
              <p className="secondgraph">{prof.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Instructor;
