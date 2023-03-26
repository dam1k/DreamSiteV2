import React from 'react'
import "./FooterMobile.scss";

const FooterMobile = () => {
     const footerTitleArr = "differentiate from others, don't be afraid.".split(" ");
     const footerCopyrightArr = "Copyright © 2021 - 2023 Dreamsite. All rights reserved.".split(" ");
  
  return (
    <div className="footer-mobile">

     <div className="footer-mobile__container">

      <div className="footer-mobile__top">
      <h2 className="footer-mobile__title footer-mobile__title--uppercase">
          {footerTitleArr.map((word, index) => {
              return (
                  <div className="footer-mobile__word" key={index}>
                    {word}
                  </div>
              );
          })}
          </h2>

          <div className="footer-mobile__left">
        <nav>
          <ul>
          <li>
            <a href="https://www.instagram.com/dreamsite.md/" 
            className="footer-mobile__link overflow">
              <div>Instagram</div>
            </a>

          </li>

          <li>
            <a href="https://www.facebook.com/profile.php?id=100088812571928"
            className="footer-mobile__link overflow">
              <div>Facebook</div>
             </a> 
          </li>

          <li>
            <a href="#" 
            className="footer-mobile__link overflow">
              <div>Behance</div>
             </a> 
          </li>
          </ul>
  
          <ul>
          <li>
            <a href="#projects" 
            className="footer-mobile__link overflow">
              <div>Projects</div>
            </a>

          </li>

          <li>
            <a href="#about"
            className="footer-mobile__link overflow">
              <div>About</div>
             </a> 
          </li>

          <li>
            <a href="#" 
            className="footer-mobile__link overflow">
              <div>Blog</div>
             </a> 
          </li>
          
          </ul>
        </nav>
        </div>
        
          <h3 className="footer-mobile__copyright">
          {footerCopyrightArr.map((word, index) => {
              return (
                  <div className="footer-mobile__word" key={index}>
                    {word}
                  </div>
              );
          })}
          </h3>
      </div>

      
          
     </div>
     </div>
  )
}

export default FooterMobile;