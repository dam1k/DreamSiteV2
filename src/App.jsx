import "./App.scss";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
// import logo from "assets/logo.svg";

function App() {
  const [showPreloader, setShowPreloader] = useState(false);
  let animation = gsap.timeline();
  useEffect(() => {
    if (!sessionStorage.getItem("firstVisit")) {
      setShowPreloader(true);
      sessionStorage.setItem("firstVisit", false);
      setTimeout(() => {
        setShowPreloader(false);
      }, 1000);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/*<div className="noise"></div>*/}
        <div className="wrapper">
          {showPreloader ? (
            <Preloader animation={animation} />
          ) : (
            <>
              <Header animation={animation} />
              <Routes>
                <Route path="/" element={<Home animation={animation} />} />
                {/* <Route path="/blog" element={<Blog />}/> */}
              </Routes>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
