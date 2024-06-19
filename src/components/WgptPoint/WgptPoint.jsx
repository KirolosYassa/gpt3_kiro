import React from "react";
import "./wgptpoint.css";

const WgptPoint = ({
  Title = "Chatbots",
  Paragraph = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
}) => {
  return (
    <div className="WgptPoint-section">
      <hr />
      <h3>{Title}</h3>
      <p>{Paragraph}</p>
    </div>
  );
};

export default WgptPoint;
