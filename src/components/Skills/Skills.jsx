import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiLaravel, SiPhp, SiMysql, SiTailwindcss, SiTypescript} from 'react-icons/si'
import {DiCss3, DiJavascript1, DiReact, DiMongodb, DiGit} from 'react-icons/di'
const Skills = () => {
  return (
    <div className='app__skills section__padding'>
      <div className='app__skills-card'>
        <AiFillHtml5 color='#FC490B' size={150}/>
        <p>HTML5</p>
      </div>
      <div className='app__skills-card'>
        <DiCss3 color='#2196F4' size={150}/>
        <p>CSS3</p>
      </div>
      <div className='app__skills-card'>
        <DiJavascript1 color='#FFDF00' size={150}/>
        <p>JAVASCRIPT</p>
      </div>
      <div className='app__skills-card'>
        <DiReact color='#2196F4' size={150}/>
        <p>REACT</p>
      </div>

      <div className='app__skills-card'>
        <DiGit color='#FC492B' size={150}/>
        <p>Git Version</p>
      </div>
      <div className='app__skills-card'>
        <SiTypescript color='#007acc' size={150}/>
        <p>TypeScript</p>
      </div>
      <div className='app__skills-card'>
        <DiMongodb color='#589636' size={150}/>
        <p>MongoDB</p>
      </div>
      <div className='app__skills-card'>
        <SiMysql color='#00758f' size={150}/>
        <p>MySql</p>
      </div>
      <div className='app__skills-card'>
        <SiTailwindcss color='#3490dc' size={150}/>
        <p>Tailwind CSS</p>
      </div>
      <div className='app__skills-card'>
        <SiPhp color='#8993be' size={150}/>
        <p>PHP</p>
      </div>
      <div className='app__skills-card'>
        <SiLaravel color='#f55247' size={150}/>
        <p>Laravel</p>
      </div>
    </div>
  )
}

export default Skills