import React from 'react'
import "./HeaderMobile.scss";
import {AnimatePresence, motion} from "framer-motion";
const HeaderMobile = ({openHeader, closeHeader}) => {
  return (
      <AnimatePresence>
          {openHeader ? <motion.nav
              key="content"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
              }}
              layout
              className="nav__mobile">

              <ul className="nav__mobile__links">
                  <li onClick={closeHeader}>
                      <a href="#projects" className="nav__mobile__link overflow">
                          <div className="projects__link">
                              Projects<i className="ri-arrow-right-up-line"></i>
                          </div>
                      </a>
                  </li>
                  <li onClick={closeHeader}>
                      <a href="#about" className="nav__mobile__link overflow">
                          <div>About</div>
                      </a>
                  </li>
              </ul>
              <ul className="nav__mobile__links">
                  <li onClick={closeHeader}>
                      <a href="https://www.instagram.com/dreamsite.md/" className="nav__mobile__link overflow">
                          <div>Instagram</div>
                      </a>
                  </li>
                  <li onClick={closeHeader}>
                      <a href="#" className="nav__mobile__link overflow">
                          <div>Facebook</div>
                      </a>
                  </li>
                  <li onClick={closeHeader}>
                      <a href="#" className="nav__mobile__link overflow">
                          <div>Behance</div>
                      </a>
                  </li>
              </ul>
          </motion.nav> : null
          }
      </AnimatePresence>
  )
}

export default HeaderMobile