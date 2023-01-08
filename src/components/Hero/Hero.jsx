import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='app__hero section__padding'>
      <div className='app__hero-heading section__margin'>
        <h2>Ertuğrul Yaman</h2>
        <p>Frontend Developer</p>
      </div>
      <div className='app__hero-button section__margin'>
        <a href='/about'>Hire Me !</a> 
      </div>
    </div>
  )
}

export default Hero