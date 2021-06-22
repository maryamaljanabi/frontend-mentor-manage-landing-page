import React from "react";

export default function Feature({ number, title, content }) {
  return (
    <div className="feature">
      <div className="header-wrapper">
        <div className="number">{number}</div>
        <div className="title">{title}</div>
      </div>
      <p className="content">{content}</p>
    </div>
  );
}
