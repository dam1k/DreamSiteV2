import { useStat, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Box from "./components/Three/Box";
import Cylinder3d from "./components/Three/Cylinder";
import { Canvas } from "@react-three/fiber";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
