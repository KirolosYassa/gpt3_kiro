import React from "react";
import { WgptPoint } from "../../components";
import "./possibility.css";
import vr from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="row possibility">
      <div className="col-lg-6 col-md-12">
        <img className="possibility-img" src={vr} />
      </div>
      <div className="col-lg-6 col-md-12 possibility-text-box">
        <h1 className="col-lg-9 col-md-12 colored-item">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility-paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h6 className="col-lg-3 col-md-12 colored-link">
          Request Early Access to Get Started
        </h6>
      </div>
    </div>
  );
};

export default Possibility;
