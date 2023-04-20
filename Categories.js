import React from "react";
import { walls } from "./data";

function categories() {
  return (
    <>
      <div className="categoriesContainer">
        <div className="browse">
          <h3>
            Browse
            <br /> By Categories
          </h3>
          <p>
            All the Lorem Ipsum generators on the internet tend to repeat
            predefend chunks as necessary, making this the first true generator.
          </p>
          <button className="catBtn">Explore Courses</button>
        </div>
        <div className="catalogue">
          <div>
            <img />
            <div>
              <p></p>
              <p></p>
            </div>
            <p className="butt">See More</p>
          </div>
          {walls.map((deck) => (
            <div className="logueCards">
              <img className={deck.className} src={deck.img} alt={deck.alt} />
              <div className="specifics">
                <p className="topdawg">{deck.paragraphOne}</p>
                <p className="crenshaw">{deck.paragraphTwo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default categories;
