import React from "react";
import { Article, Brand, CTA, NavBar, Feature } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <NavBar />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
