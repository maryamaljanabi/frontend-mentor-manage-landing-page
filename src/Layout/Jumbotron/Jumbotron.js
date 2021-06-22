import React from "react";
import "./Jumbotron.scss";
import Illustration from "./../../assets/images/illustration-intro.svg";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="left-paragraph">
        <h3>Bring everyone together to build better products.</h3>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="rounded-orange-button">Get Started</button>
      </div>
      <div className="right-images">
        <img src={Illustration} alt="intro-illustration" />
      </div>
    </div>
  );
};

export default Jumbotron;
