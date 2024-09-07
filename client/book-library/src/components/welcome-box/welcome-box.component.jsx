import React from "react";
import "./welcome-box.styles.css";

const WelcomeBox = () => {
  return (
    <div className="welcome-box">
      <p className="welcome-title">Welcome to Our Library</p>
      <p className="welcome-message">
        Feed Your Mind, Elevate Your Knowledge
        <br />
        <span className="welcome-submessage">
          Explore & Enjoy the World of Books
        </span>
      </p>
      <button className="explore-button">Explore Now</button>
    </div>
  );
};

export default WelcomeBox;
