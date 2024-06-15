import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import bootstrap from "bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#wgpt3">What is GPT?</Nav.Link>
              <Nav.Link href="#openai">Open AI</Nav.Link>
              <Nav.Link href="#article">Article</Nav.Link>
              <Nav.Link href="#casestudies">Case Studies</Nav.Link>
              <Nav.Link href="#library">Library</Nav.Link>
              <div>
                <span className="navbar__sign-section">
                  <p>Sign in</p>
                  <button className="orange__button">Sign Up</button>
                </span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
