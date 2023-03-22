import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ASCII from "../components/Three/ASCII";
import About from "../components/About/About";
import Preloader from "../components/Preloader/Preloader.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Form from "../components/Form/Form";

const Home = ({ animation }) => {
  return (
    <>
      <Preloader />
      <Hero animation={animation} />
      <div className="canvas-wrapper">
        <ASCII animation={animation} />
      </div>
      <About />
      <Projects />
      <Form />
    </>
  );
};

export default Home;
