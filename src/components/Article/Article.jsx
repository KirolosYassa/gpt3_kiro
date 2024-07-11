import React from "react";
import "./article.css";

const Article = ({ srcOfImage, date_published, title }) => {
  return (
    <div className="article-box">
      <img src={srcOfImage} />
      <div className="article-text">
        <h6>{date_published}</h6>
        <h3>{title}</h3>
        <h6>Read Full Article</h6>
      </div>
    </div>
  );
};

export default Article;
