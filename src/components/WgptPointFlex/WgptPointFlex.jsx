import React from "react";
import "./wgptPointflex.css";

const WgptPointFlex = ({
  Title = "Chatbots",
  Paragraph = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
}) => {
  return (
    <div className="WgptPoint-section-flex">
      <div className="WgptPoint-section-title-flex">
        <hr />
        <h3>{Title}</h3>
      </div>
      <div className="WgptPoint-section-paragraph-flex">
        <p>{Paragraph}</p>
      </div>
    </div>
  );
};

export default WgptPointFlex;
