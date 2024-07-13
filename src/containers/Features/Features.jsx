import React from "react";
import { WgptPoint } from "../../components";
import "./features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features-headline">
        <h1 className="colored-item">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <h6 className="colored-link">Request Early Access to Get Started</h6>
      </div>
      <div className="feutures-column">
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
