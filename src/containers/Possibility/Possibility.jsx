import React from "react";
import { WgptPoint } from "../../components";
import "./possibility.css";
import vr from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility">
      <div className="">
        <img className="possibility-img" src={vr} />
      </div>
      <div className=" possibility-text-box">
        <h1 className="colored-item">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility-paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h6 className="colored-link">Request Early Access to Get Started</h6>
      </div>
    </div>
  );
};

export default Possibility;
