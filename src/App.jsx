import { useStat, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ASCII from "./components/Three/ASCII";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Hero />
          <div className="canvas-wrapper">
              <ASCII/>
          </div>
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
