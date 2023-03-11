import React, {useLayoutEffect, useRef} from "react";
import logo from "../../assets/logo.svg";
import arrowupright from "../../assets/arrowupright.svg";
import "./Header.scss";
import {gsap} from "gsap";
const Header = ({animation}) => {

  const comp = useRef();
  const buttonsRef = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      animation.from('.header__logo img, .nav__link div', {
        y: 100,
        delay: 0.2,
        ease: "power4.out",
        duration: 1,
        stagger: {
          amount: 0.5
        }
      })

      // animation.fromTo('.header__links a', {
      //   y: 100,
      //   delay: 0.2,
      //   ease: "power4.out",
      //   duration: 0.7
      //   // stagger: {
      //   //   amount: 0.5
      //   // }
    
      // }
  
      // )
     

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={comp} className="header">
      <div className="header__container">
        <a href="#" className="header__logo">

          <div className="header__logo overflow">
            <img src={logo} alt="Logo" />
          </div>

        </a>
        <div className="header__right">
          <nav className="nav">
            <ul className="nav__links">
              <li>
                <a href="#projects" className="nav__link overflow">
                  <div>Projects<i className="ri-arrow-right-up-line"></i></div>
                </a>
              </li>
              <li>
                <a href="#" className="nav__link overflow">
                  <div>About</div>
                </a>
              </li>
            </ul>
            <ul className="nav__links">
              <li>
                <a href="#" className="nav__link overflow">
                  <div>Instagram</div>
                </a>
              </li>
              <li>
                <a href="#" className="nav__link overflow">
                  <div>Facebook</div>
                </a>
              </li>
              <li>
                <a href="#" className="nav__link overflow">
                  <div>Behance</div>
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__links overflow">

              <a href="#" className="header__link">
                Telegram
              </a>
              
              <a href="#" className="header__link header__link--active">
                +373(22)71-09-40
              </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
