import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ASCII from "../components/Three/ASCII";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects.jsx";
import Form from "../components/Form/Form";

const Home = ({ animation }) => {
  return (
    <>
      <Hero animation={animation} />
      <div className="canvas-wrapper">
        <div className="block__mobile"/>
        <ASCII animation={animation} />
      </div>
      <About />
      <Projects />
      <Form />
    </>
  );
};

export default Home;
