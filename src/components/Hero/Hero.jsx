import React from 'react'

const heroText = "Leveraging the latest technologies to create cutting-edge websites that deliver results".split(" ");

const Hero = () => {
  return (
     <div className="hero">
          <div className="hero__container">
               <div className="hero__text"> 
                    {heroText.map((word, index) => {
                         return <h2 key={index} className='overflow'><span>{word}</span></h2>
                    })}
               </div>
          </div>
     </div>
  )
}

export default Hero;