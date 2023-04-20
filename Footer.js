import React from "react";
import { footpic } from "./data";
import emailIcon1 from "../Images/emailIcon1.svg";

function Footer() {
  return (
    <>
      <div className="footContainer">
        <div className="foottop">
          <div className="listOne">
            <p className="company">EduLearn</p>
            <p className="bracket">
              EduLearn is an online website where people can learn new skills.
            </p>
            <div>
              <img />
            </div>
            {footpic.map((circle) => (
              <div className="broadcast">
                <img
                  className={circle.className}
                  src={circle.img}
                  alt={circle.alt}
                />
              </div>
            ))}
          </div>
          <div className="listTwo">
            <ul>
              <li className="bold1">Pages</li>
              <li>Home Page</li>
              <li>About</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="listThree">
            <ul>
              <li className="bold1">Support</li>
              <li>FAQS</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="listFour">
            <ul>
              <li>Get Newsletter</li>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                className="buttmail"
              />
              <span>
                <button className="BtnIcon">
                  <img src={emailIcon1} alt="Send Icon" />
                </button>
              </span>
            </ul>
          </div>
        </div>
        <div className="whitelinebtn"></div>
        <div className="footend">
          <p className="myLast">copyright @2023. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
