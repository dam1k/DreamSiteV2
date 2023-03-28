import "./App.scss";
import { gsap } from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FooterMobile from "./components/Footer/FooterMobile";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
// import logo from "assets/logo.svg";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  let animation = gsap.timeline();
 
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setShowPreloader(false);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } 
    else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    function setDimension() {
      setWidth(window.innerWidth);
    }

    setDimension();

    window.addEventListener('resize', setDimension);

    return () => window.removeEventListener('resize', setDimension);
  }, [width]);


  return (
    <BrowserRouter>
      <div className="App">
        {/*<div className="noise"></div>*/}
        {/* <div className="wrapper"> */}
          {showPreloader ? (
            <Preloader animation={animation} />
          ) : (
            <>
              <Header animation={animation} />
              <Routes>
                <Route path="/" element={<Home animation={animation} />} />
                {/* <Route path="/blog" element={<Blog />}/> */}
              </Routes>
              {width > 900 ? <Footer/> : <FooterMobile/>}
            </>
          )}
        </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
