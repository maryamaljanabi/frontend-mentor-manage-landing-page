import React from "react";

export default function Card({ img, name, content }) {
  return (
    <div className="card">
      <img src={img} alt="testimonials-image" />
      <div className="content">
        <h3>{name}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
