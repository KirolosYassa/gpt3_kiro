import React from "react";
import { WgptPoint } from "../../components";
import "./whatgpt3.css";
const WhatGPT3 = () => {
  return (
    <div id="wgpt3">
      <div className="wgpt3-first-title">
        <span>
          <hr />
          <h5 className="wgpt3-title">What is GPT-3</h5>
        </span>
        <p className="wgpt3-paragraph">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="possibility-headline">
        <h1 className="colored-item">
          The possibilities are beyond your imagination
        </h1>
        <h6 className=" colored-link possibility-link">
          Explore The Library
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <WgptPoint
            Title="Chatbots"
            Paragraph="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <WgptPoint
            Title="Knowledgebase"
            Paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <WgptPoint
            Title="Education"
            Paragraph="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
