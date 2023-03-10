import React from "react";
import logo from "../../assets/logo.svg";
import arrowupright from "../../assets/arrowupright.svg";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__right">
          <nav className="nav">
            <ul className="nav__links">
              <li>
                <a href="#projects" className="nav__link">
                  Projects<i className="ri-arrow-right-up-line"></i>
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
            </ul>
            <ul className="nav__links">
              <li>
                <a href="#" className="nav__link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="nav__link">
                  Behance
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__links">
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
