import React from 'react'
import "./About.scss";

const titleArr = "With a focus on results-driven design and cutting-edge technology, we'll help you take your online presence to the next level".split(" ");
const subTitleArr = "We are a team of talented, hard working individuals. Our purpose is to help you achieve the success you deserve by bringing your business to the online world.".split(" ");

const About = () => {
     return (
     <div className="about">
          <div className="about__container">
               <h2 className="about__title about__title--left overflow"><span>About</span> <span>01</span></h2>

               <div className="about__right">
                    <h2 className="about__title about__title--uppercase overflow">
                         {titleArr.map((word, index) => {
                              return <span key={index}>{word}</span>
                         })}
                    </h2>

                    <div className="about__bottom">
                         <div className="about__activity">
                              <h3 className='overflow'><span>2021</span> <span>(Beginning)</span></h3>
                              <h2 className="overflow"><span>Founded in 2022</span></h2>
                              <h3 className='overflow'><span>2023</span> <span>(Active)</span></h3>
                         </div>

                         <h3 className="about__subtitle overflow">
                              {subTitleArr.map((word, index) => {
                                   return <span key={index}>{word}</span>
                              })}
                         </h3>
                    </div>
               </div>
          </div>
     </div>
     )
}

export default About