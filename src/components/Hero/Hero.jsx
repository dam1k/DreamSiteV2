import React, {useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";
import "./Hero.scss";

const heroText =
  "Leveraging the latest technologies to create cutting-edge websites that deliver results.".split(
    " "
  );

const Hero = ({animation}) => {

    const comp = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            animation.from('.hero__word', {
                y: 100,
                ease: "power4.out",
                delay: -0.5,
                duration: 1.2,
                stagger: {
                    amount: 1
                }

            })
        }, comp);
        return () => ctx.revert();
    }, []);

  return (
    <div ref={comp} className="hero">
      <div className="hero__container">
        <div className="hero__text" >
          {heroText.map((word, index) => {
            return (
              <h2 key={index}  className="overflow">
                <div className="hero__word">{word}</div>
              </h2>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hero;
