import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emaillist_profiles from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div id="home">
      <div className="headline-text ">
        <h1 className="colored-item">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <span className="header__email-address">
              <Form.Control type="email" placeholder="Your Email Address" />

              <Button
                className="orange__button"
                variant="primary"
                type="submit"
              >
                Get Started
              </Button>
            </span>
            <Form.Text className="text-muted emailList">
              <img className="emaillist-img" src={emaillist_profiles}></img>
              <p> 1,600 people requested access a visit in last 24 hours</p>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div className="header-img ">
        <img className="header__ai-image  " src={ai} alt="ai image" />
      </div>
    </div>
  );
};

export default Header;
