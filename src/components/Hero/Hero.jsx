import React from 'react';
import { gsap } from "gsap";
import "./Hero.scss";

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