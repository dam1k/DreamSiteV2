import React, { useLayoutEffect, useState } from "react";
import "./Preloader.scss";
import gsap from "gsap";
import logo from "../../assets/logo.svg";

const Preloader = ({animation}) => {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animation.to(".preloader", {
        opacity: "0%",
        delay: 1,
        ease: "power4.out",
        duration: 5,
      })
    });
    return () => ctx.revert();
  }, []);

  return <div className="preloader">
    <div>
    <img src={logo} className="preloader__logo" alt="logo"/>
    </div>
  </div>;
};

export default Preloader;
