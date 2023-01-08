import React, { useState } from 'react'
import "./navbar.css"
import {BiHappy, BiSad} from 'react-icons/bi'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev)=> !prev)
  }
  return (
    <div className='app__navbar section__padding'>
      <div className='app__navbar-logo'>
        <a href='/'>Portfolio</a>
      </div>
      <ul className='app__navbar-links'>
        <a href='/'>Home</a>
        <a href="/skills">Skills</a>
        <a href="/project">Projects</a>
        <a href="/about">About Me</a>
      </ul>
      <div className='app__navbar-menu'>
        {toggle 
        ? <BiSad  color='#fff' size={30} onClick={handleToggle}/>
        :<BiHappy color='#fff' size={30} onClick={handleToggle}/>}
        {toggle && 
        <ul className='app__navbar-menu_links'>
          <a href='/'>Home</a>
          <a href="/skills">Skills</a>
          <a href="/project">Projects</a>
          <a href="/about">About Me</a>
        </ul>
        }
      </div>
    </div>
  )
}

export default Navbar