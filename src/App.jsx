import "./App.scss";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import React from "react";
// import logo from "assets/logo.svg";

function App() {
  let animation = gsap.timeline();

  return (
    <BrowserRouter>
      <div className="App">
        <div className="noise"></div>
        <div className="wrapper">
          <Header animation={animation} />
          <Routes>
            <Route path="/" element={<Home animation={animation} />} />
            {/* <Route path="/blog" element={<Blog />}/> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
