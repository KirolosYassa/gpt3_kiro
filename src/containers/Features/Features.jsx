import React from "react";
import { WgptPoint } from "../../components";
import "./features.css";

const Features = () => {
  return (
    <div className="row possibility">
      <div className="col-lg-3 col-md-12">
        <h1 className="col-lg-9 col-md-12 colored-item">
          The possibilities are beyond your imagination
        </h1>
        <h6 className="col-lg-3 col-md-12 colored-link">
          Request Early Access to Get Started
        </h6>
      </div>
      <div className="col-lg-3 col-md-12">
        <WgptPoint
          Title="Improving end distrusts instantly "
          Paragraph="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        />
        <WgptPoint
          Title="Become the tended active"
          Paragraph="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
        <WgptPoint
          Title="Message or am nothing"
          Paragraph="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        />
        <WgptPoint
          Title="Really boy law county"
          Paragraph="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        />
      </div>
    </div>
  );
};

export default Features;
