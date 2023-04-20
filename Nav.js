import React, { useState } from "react";
import EduLearn from "../Images/EduLearn.svg";

function Nav() {
  // to change burger classes
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <img className="nav-image" src={EduLearn} alt="company_logo" />
        <div className="btn">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Courses</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Contact Us</li>
          </ul>
          <div className="hamburger shade" onClick={() => setOpen(!open)}>
            <div className="show_modal hide"></div>
            <div className="show_modal hide"></div>
            <div className="show_modal hide"></div>
          </div>
          {open && (
            <div className="mobile">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Sign Up</li>
              </ul>
            </div>
          )}
        </div>
        <button className="nav-btn">Sign Up</button>
      </nav>
    </>
  );
}

export default Nav;
