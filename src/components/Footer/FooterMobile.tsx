import React from 'react'
import "./FooterMobile.scss";

const FooterMobile = () => {
     const footerTitleArr = "differentiate from others, don't be afraid.".split(" ");
     const footerCopyrightArr = "Copyright © 2021 - 2023 Dreamsite. All rights reserved.".split(" ");
  
  return (
    <div className="footer__mobile">
     <div className="footer__mobile__container">

      <div className="footer__mobile__top">
      <h2 className="footer__mobile__title footer__mobile__title--uppercase">
          {footerTitleArr.map((word, index) => {
              return (
                  <div className="footer__mobile__word" key={index}>
                    {word}
                  </div>
              );
          })}
          </h2>

          <div className="footer__mobile__left">
        <nav>
          <ul>
          <li>
            <a href="https://www.instagram.com/dreamsite.md/" 
            className="footer__mobile__link overflow">
              <div>Instagram</div>
            </a>

          </li>

          <li>
            <a href="https://www.facebook.com/profile.php?id=100088812571928"
            className="footer__mobile__link overflow">
              <div>Facebook</div>
             </a> 
          </li>

          <li>
            <a href="#" 
            className="footer__mobile__link overflow">
              <div>Behance</div>
             </a> 
          </li>
          </ul>
  
          <ul>
          <li>
            <a href="#projects" 
            className="footer__mobile__link overflow">
              <div>Projects</div>
            </a>

          </li>

          <li>
            <a href="#about"
            className="footer__mobile__link overflow">
              <div>About</div>
             </a> 
          </li>

          <li>
            <a href="#" 
            className="footer__mobile__link overflow">
              <div>Blog</div>
             </a> 
          </li>
          
          </ul>
        </nav>
        </div>
        
          <h3 className="footer__mobile__copyright">
          {footerCopyrightArr.map((word, index) => {
              return (
                  <div className="footer__mobile__word" key={index}>
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