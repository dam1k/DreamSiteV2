import React from 'react'
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
        <div className="header__container">
            <img src={logo} alt="Logo"/>
            <div className="header__right">
            <nav className="nav">
                <ul className="nav__links">
                    <li><a href="#" className="nav__links">Projects</a></li>
                    <li><a href="#" className="nav__links">About</a></li>
                </ul>
                <ul className="nav__links">
                    <li><a href="#" className="nav__links">Instagram</a></li>
                    <li><a href="#" className="nav__links">Facebook</a></li>
                    <li><a href="#" className="nav__links">Facebook</a></li>
                </ul>
            </nav>
                <div className="header__links">
                    <a href="#" className="header__link">Telegram</a>
                    <a href="#" className="header__link header__link--active">+373(22)71-09-40</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header