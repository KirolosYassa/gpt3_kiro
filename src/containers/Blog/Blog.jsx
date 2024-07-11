import React from "react";
import "./blog.css";
import { Article } from "../../components";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div>
      <h1 className="colored-item">
        A lot is happening, We are blogging about it.{" "}
      </h1>
      <div id="blog">
        <div className="blog_main">
          <Article
            srcOfImage={blog1}
            date_published="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_item blog_item_1">
          <Article
            srcOfImage={blog2}
            date_published="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_item blog_item_2">
          <Article
            srcOfImage={blog3}
            date_published="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_item blog_item_3">
          <Article
            srcOfImage={blog4}
            date_published="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog_item blog_item_4">
          <Article
            srcOfImage={blog5}
            date_published="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
