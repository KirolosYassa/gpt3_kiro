import React from "react";
import "./wgptpoint.css";

const WgptPoint = ({
  Title = "Chatbots",
  Paragraph = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
}) => {
  return (
    <div className="WgptPoint-section">
      <div className="">
        <hr />
        <h3>{Title}</h3>
      </div>
      <div className="">
        <p>{Paragraph}</p>
      </div>
    </div>
  );
};

export default WgptPoint;
