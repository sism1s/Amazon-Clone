import React from "react";
import "./Category.css";

function Category({ image, title }) {
  return (
    <div className="category">
      <div className="category__info">
        <h2>{title}</h2>
      </div>
      <img src={image} alt="category" />
    </div>
  );
}

export default Category;
