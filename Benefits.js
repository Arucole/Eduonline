import React from "react";
import { cases } from "./data";

function Benefits() {
  return (
    <>
      <div className="ben-container">
        <div className="ben-top">
          <h6>Why Choose Us</h6>
          <p className="uppergraph">Benefits of Online Course</p>
          <p className="let">
            Service at Edu<span>Learn</span>
          </p>
        </div>
        <div className="benefitsCardHolder">
          <div>
            <img />
            <p></p>
            <p></p>
          </div>
          {cases.map((card) => (
            <div className="ben-cards">
              <img className={card.className} src={card.img} alt={card.alt} />
              <p className="top-graph">{card.paragraph1}</p>
              <p className="second-graph">{card.paragraph2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Benefits;
