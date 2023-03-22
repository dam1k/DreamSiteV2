import React, { useLayoutEffect, useRef, useState } from "react";
import "./Preloader.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

const Preloader = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [projectToShow, setProjectToShow] = useState(1);
  const comp = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {});
    gsap.to(".preloader", {
      opacity: "0%",
      delay: 1,
      ease: "power4.out",
      duration: 5,
    });
    return () => ctx.revert();
  }, []);

  const divVariants = {
    open: {
      opacity: 1,
      height: "auto",
      marginTop: "25px",
    },
    collapsed: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
  };

  const handleClick = (projectId) => {
    if (projectId === projectToShow) {
      setProjectToShow(0);
    } else {
      setProjectToShow(projectId);
    }
  };

  return <div className="preloader"></div>;
};

export default Preloader;
