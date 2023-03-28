import React from 'react'
import "./HeaderMobile.scss";

const HeaderMobile = () => {
  return (
     <nav className="nav__mobile">
     <ul className="nav__mobile__links">
       <li>
         <a href="#projects" className="nav__mobile__link overflow">
           <div>
             Projects<i className="ri-arrow-right-up-line"></i>
           </div>
         </a>
       </li>
       <li>
         <a href="#about" className="nav__mobile__link overflow">
           <div>About</div>
         </a>
       </li>
     </ul>
     <ul className="nav__mobile__links">
       <li>
         <a href="https://www.instagram.com/dreamsite.md/" className="nav__mobile__link overflow">
           <div>Instagram</div>
         </a>
       </li>
       <li>
         <a href="#" className="nav__mobile__link overflow">
           <div>Facebook</div>
         </a>
       </li>
       <li>
         <a href="#" className="nav__mobile__link overflow">
           <div>Behance</div>
         </a>
       </li>
     </ul>
   </nav>
  )
}

export default HeaderMobile