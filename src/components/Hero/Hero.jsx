import React from 'react';
import { gsap } from "gsap";
import "./Hero.scss";
import "./animation.js";


const tll = gsap.timeline({});
tll.fromTo(".hero__text h2", {
    y: '100%',
    opacity: "0%",
}, {
    ease: "power4.out",
    duration: "1",
    y: "0%",
    opacity: "100%",
    delay: "-1",
    stagger: {
        amount: "0.5",
    },
});

const heroText = "Leveraging the latest technologies to create cutting-edge websites that deliver results".split(" ");

const Hero = () => {
  return (
     <div className="hero">
          <div className="hero__container">
               <div className="hero__text"> 
                    {heroText.map((word, index) => {
                         return <h2 key={index} className='overflow'><span>{word}</span></h2>
                    })}
               </div>
          </div>
     </div>
  )
}

export default Hero;