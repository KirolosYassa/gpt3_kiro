import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-step">
        <h1 className="colored-item">
          Do you want to step in to the future before others
        </h1>
        <button className="footer-button">Request Early Access</button>
      </div>
      <div>
        <div className="footer-links-div">
          <div>
            <img src={logo} className="footer-logo" />
            <h6>
              Crechterwoord K12 182 DK <br />
              Alknjkcb, All Rights Reserved
            </h6>
          </div>
          <div>
            <h5>Links</h5>
            <h6>Overons</h6>
            <h6>Social Media</h6>
            <h6>Counters</h6>
            <h6>Contact</h6>
          </div>
          <div>
            <h5>Company</h5>
            <h6>Terms & Conditions</h6>
            <h6>Privacy Policy</h6>
            <h6>Contact</h6>
          </div>
          <div>
            <h5>Get in touch</h5>
            <h6>Crechterwoord K12 182 DK Alknjkcb</h6>
            <h6>085-132567</h6>
            <h6>info@payme.net</h6>
          </div>
        </div>
        <p className="footer-line"> 2021 GPT3 Kiro. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
