import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

const Brand = () => {
  return (
    <div className="row brand-section">
      <img className="col-lg-3 col-md-6 col-sm-12 " src={google} alt={google} />
      <img className="col-lg-3 col-md-6 col-sm-12 " src={slack} alt={slack} />
      <img
        className="col-lg-3 col-md-6 col-sm-12 "
        src={atlassian}
        alt={atlassian}
      />
      <img
        className="col-lg-3 col-md-6 col-sm-12 "
        src={dropbox}
        alt={dropbox}
      />
      <img
        className="col-lg-3 col-md-6 col-sm-12 "
        src={shopify}
        alt={shopify}
      />
    </div>
  );
};

export default Brand;
