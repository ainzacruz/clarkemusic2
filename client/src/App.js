import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import About from "./components/About";
import Footer from "./components/header_footer/Footer";
import Events from "./components/Events";
import Photos from "./components/IG_photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Element name="home">
          <Header />
        </Element>
        <Featured />
        <Element name="about">
          <About />
        </Element>
        <Element name="shows">
          <Events />
        </Element>
        <Element name="photos">
          <Photos />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
