import React from "react";
import { WgptPoint } from "../../components";
import "./whatgpt3.css";
const WhatGPT3 = () => {
  return (
    <div id="wgpt3">
      <div className="row">
        <hr />
        <h5 className="col-md-3 col-sm-12">What is GPT-3</h5>
        <p className="col-md-9 col-sm-12">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="row possibility-headline">
        <h1 className="col-lg-9 col-md-12 colored-item">
          The possibilities are beyond your imagination
        </h1>
        <h6 className="col-lg-3 col-md-12 ">Explore The Library</h6>
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
