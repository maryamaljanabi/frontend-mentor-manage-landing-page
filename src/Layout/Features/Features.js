import React from "react";
import Feature from "./Feature";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="left-section">
        <h3> What’s different about Manage?</h3>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="right-section">
        <Feature
          number="01"
          title="Track company-wide progress"
          content="See how your day-to-day tasks fit into the wider vision. Go from 
          tracking progress at the milestone level all the way done to the 
          smallest of details. Never lose sight of the bigger picture again."
        />
        <Feature
          number="02"
          title="Advanced built-in reports"
          content="Set internal delivery estimates and track progress toward company 
          goals. Our customisable dashboard helps you build out the reports 
          you need to keep key stakeholders informed."
        />
        <Feature
          number="03"
          title="Everything you need in one place"
          content="Stop jumping from one service to another to communicate, store files, 
          track tasks and share documents. Manage offers an all-in-one team 
          productivity solution."
        />
      </div>
    </div>
  );
};

export default Features;
