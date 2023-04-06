import React, { useLayoutEffect, useRef, useState} from "react";
import logo from "../../assets/logo.svg";
import arrowupright from "../../assets/arrowupright.svg";
import HeaderMobile from "./HeaderMobile";
import "./Header.scss";
import { gsap } from "gsap";
import {NavLink} from "react-router-dom";

const Header = ({ animation }) => {
  const [openHeader, setOpenHeader] = useState(false);
  const comp = useRef();
  const buttonsRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animation.from(".header__logo img, .nav__link div", {
        y: "110%",
        delay: 0.8,
        ease: "power4.out",
        duration: 1,
        stagger: {
          amount: 0.5,
        },
      });
      animation.fromTo(
        ".header__link",
        {
          opacity: "0%",
        },
        {
          y: "0%",
          opacity: "100%",
          delay: -1,
          duration: 0.3,
          ease: "power0.out",
          stagger: {
            amount: 0.3,
          },
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="overlay"></div>
      <header ref={comp} className="header">
        <div className="header__container">
          <a href="#" className="header__logo" >
            <div className="header__logo overflow">
              <img src={logo} alt="Logo" />
            </div>
          </a>
          <div className="header__right">
            <nav className="nav">
              <ul className="nav__links">
                <li>
                  <a href="#projects" className="nav__link overflow">
                    <div>
                      Projects<i className="ri-arrow-right-up-line"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav__link overflow">
                    <div>About</div>
                  </a>
                </li>
                <li>
                  <a className="nav__link overflow">
                    <div>
                     <NavLink to="/blog">Blog</NavLink>
                    </div>
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
            <div className="header__links">
              <div className="overflow">
                <a href="#" className="header__link">
                  ↳ Telegram
                </a>
              </div>

              {/* {openHeader && <HeaderMobile/>} */}

              <div className="overflow">
                <a href="#" className="header__link header__link--active">
                  +373(22)71-09-40
                </a>
              </div>
            </div>

            {/* <div className="header__nav-toggle">
          <div className="header__nav-toggle-line" onClick={() => {
              console.log('bjk');
              setOpenHeader(prev => !prev)
             }}></div>
          <div className="header__nav-toggle-line"></div>
     </div> */}
          </div>
        </div>
      
        {/* <HeaderMobile/> */}
      </header>
    </>
  );
};

export default Header;
