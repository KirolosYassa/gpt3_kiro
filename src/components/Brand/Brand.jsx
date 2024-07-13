import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

const Brand = () => {
  return (
    <div className="brand-section">
      <img src={google} alt={google} />
      <img src={slack} alt={slack} />
      <img src={atlassian} alt={atlassian} />
      <img src={dropbox} alt={dropbox} />
      <img src={shopify} alt={shopify} />
    </div>
  );
};

export default Brand;
