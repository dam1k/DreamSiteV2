import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ASCII from "./components/Three/ASCII";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Form from "./components/Form/Form";
import {gsap} from "gsap";

function App() {
    let animation = gsap.timeline();

  return (
    <div className="App">
      <div className="wrapper">
        <Header animation={animation}/>
        <Hero animation={animation}/>
        <div className="canvas-wrapper">
            <ASCII animation={animation}/>
        </div>
        <About />
        <Projects />
        <Form/>
      </div>
    </div>
  );
}

export default App;
