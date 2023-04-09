import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ASCII from "../components/Three/ASCII";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects.jsx";
import Form from "../components/Form/Form";
import ArticlesPreview from "../components/ArticlesPreview/ArticlesPreview";

const Home = ({ animation, posts }) => {
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
      {/*{posts.length !== 0 && <ArticlesPreview posts={posts}/>}*/}
    </>
  );
};

export default Home;
