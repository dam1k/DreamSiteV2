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

  function closeHeader() {
    setOpenHeader(false);
  }

  return (
    <>
       <HeaderMobile openHeader={openHeader} closeHeader={closeHeader}/>
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
                  <NavLink to="/#about" className="nav__link overflow">
                    <div>About</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav__link overflow" to="/blog">
                    <div>
                      Blog
                    </div>
                  </NavLink>
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

               {/*{openHeader && <HeaderMobile/>}*/}

              <div className="overflow">
                <a href="#" className="header__link header__link--active">
                  +373(22)71-09-40
                </a>
              </div>

            </div>

            <div className={`header__nav-toggle ${openHeader ? "active" : ""}`} onClick={() => {
              // if(!openHeader) {
              //   document.body.style.height = "100vh";
              //   document.body.style.overflow = "hidden";
              // } else {
              //   document.body.style.height = "100%";
              //   document.body.style.overflow = "visible";
              // }
              setOpenHeader(prev => !prev)
            }
            }>
          <div className={`header__nav-toggle-line`}/>
          <div className="header__nav-toggle-line"/>
     </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
