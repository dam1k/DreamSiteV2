import React, { useLayoutEffect} from "react";
import "./Preloader.scss";
import gsap from "gsap";

const Preloader = ({animation}) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {});
    animation.to(".preloader", {
      opacity: "0%",
      delay: 1,
      ease: "power4.out",
      duration: 5,
    });
    return () => ctx.revert();
  }, []);

  return <div className="preloader"></div>;
};

export default Preloader;
