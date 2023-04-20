import React from "react";
import { monials } from "./data";
import { monials1 } from "./data";

function Testimony() {
  return (
    <>
      <div className="container-Testimony">
        <div className="text">
          <p className="flew">Our Testimonial</p>
          <p className="rough">What Students Say About Us</p>
        </div>
        <div className="testCards">
          <img />
          <div>
            <img />
            <p></p>
            <p></p>
          </div>
          {monials.map((tip) => (
            <div className="tabs">
              <img className={tip.className} src={tip.img} alt={tip.alt1} />
              <div className="split">
                <img
                  className={tip.className0ne}
                  src={tip.rates}
                  alt={tip.alt2}
                />
                <p className="quote">{tip.first}</p>
                <p className="taggers">{tip.second}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testCards2">
          <img />
          <div>
            <img />
            <p></p>
            <p></p>
          </div>
          {monials1.map((tops) => (
            <div className="tabs">
              <img className={tops.className} src={tops.img} alt={tops.alt1} />
              <div className="split">
                <img
                  className={tops.className0ne}
                  src={tops.rates}
                  alt={tops.alt2}
                />
                <p className="quote">{tops.first}</p>
                <p className="taggers">{tops.second}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimony;
