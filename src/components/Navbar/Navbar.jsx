import React from 'react'
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrowupright.svg";
import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.nav}>
     
     <div className={style.nav_first_col}>
     <img className={style.logo} src={logo}/>
     <div>
          <ul>
               <li className="flex items-center"><a href="#">Projects</a><span><img src={arrow}/></span></li>
               <li>About</li>
          </ul>
          <ul>
               <li><a href="#">Instagram</a></li>
               <li><a href="#">Facebook</a></li>
               <li><a href="#">Behance</a></li>
          </ul>
     </div>
     </div>
     
     <div className={style.nav_second_col}>
          <button className="dark_btn">
               TELEGRAM
          </button>
          <button className="light_btn">
               +373 799 19 163
          </button>
     </div>
    </nav>
  )
}

export default Navbar