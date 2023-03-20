import React, { useLayoutEffect, useRef } from "react";
import "./About.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const titleArr =
  "With a focus on results-driven design and cutting-edge technology, we'll help you take your online presence to the next level".split(
    " "
  );
const subTitleArr =
  "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(
    " "
  );

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const comp = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about__title--span", {
        y: "100%",
        ease: "power4.out",
        duration: 1.2,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: ".about__title--span",
          // markers: true,
          start: "bottom 90%",
        },
      });

      gsap.from(".about__word", {
        y: "100%",
        ease: "power4.out",
        // delay: -0.5,
        duration: 1.2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".about__word",
          // markers: true,
          start: "bottom 90%",
        },
      });
      
      gsap.from(".about__activity span, .about__activity h2 div", {
        y: "100%",
        ease: "power4.out",
        // delay: -0.5,
        duration: 1.2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".about__bottom",
          // markers: true,
          start: "bottom 90%",
        },
      });
      gsap.from(".about__subtitle h3 div", {
        y: "100%",
        ease: "power4.out",
        delay: 0.75,
        duration: 1,
        stagger: {
          amount: 1.2,
        },
        scrollTrigger: {
          trigger: ".about__bottom",
          // markers: true,
          start: "bottom 90%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="about">
      <div className="about__container">
        <h2 className="about__title about__title--left overflow">
          <span className="about__title--span">About</span>{" "}
          <span className="about__title--span">01</span>
        </h2>

        <div className="about__right">
          <div className="about__flex">
            {titleArr.map((word, index) => {
              return (
                <h2 className="about__title about__title--uppercase overflow">
                  <div className="about__word" key={index}>
                    {word}
                  </div>
                </h2>
              );
            })}
          </div>

          <div className="about__bottom">
            <div className="about__activity">
              <h3 className="overflow">
                <span>2021</span> <span>(Beginning)</span>
              </h3>
              <h2 className="overflow">
                <div>Founded in 2022</div>
              </h2>
              <h3 className="overflow">
                <span>2023</span> <span>(Active)</span>
              </h3>
            </div>

            {/* <h3 className="about__subtitle">
              {subTitleArr.map((word, index) => {
                return <span className="overflow" key={index}>{word}</span>;
              })}
            </h3> */}
            <div className="about__subtitle">
              {subTitleArr.map((word, index) => {
                return (
                  <h3 className="overflow">
                    <div key={index}>
                      {word}
                    </div>
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
