import React from 'react'
import './about.css'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs'
const About = () => {
  return (
    <div className='app__about section__padding'>
      <div className='app__about-header'>
        <h2>Who Am I ?</h2>
        <p>Hello, my name is Ertuğrul Yaman. I am a self-taught software developer with a strong command of JavaScript and TypeScript languages. I have experience developing web applications using libraries and frameworks such as React.js and Next.js. I am currently seeking new job opportunities and looking to work on innovative projects.</p>
        </div>
        <div className='app__about-info'>
          <ul>
            <h4>Certificates</h4>
            <li>Turkcell Geleceği Yazanlar React 101, 201, 301, 401 Certificates</li>
            <li>Patika Beginner Frontend Web Development Path</li>
            <li>Responsive Web Design freeCodeCamp's Certificates</li>
            <a href="https://www.linkedin.com/in/ertugrul-yaman-developer/">More...</a>
          </ul>
          <ul>
            <h4>Languages</h4>
            <li>Turkish (Native)</li>
            <li>English (Intermediate)</li>
          </ul>
          <ul>
            <h4>Hobbies</h4>
            <li>Playing guitar</li>
            <li>Reading</li>
            <li>Basketball</li>
          </ul>
        </div>
      <div className="app__about-hire">
        <h4>Interested in working together? </h4>
        <a href='mailto:ertugrulyaman99@gmail.com'>Hire Me &#x1F4E7;</a>
      </div>
      <div className='app__about-footer'>
        <div className='app__about-footer_contact'>
          <h2>Contact :</h2>
          <p>e-mail: ertugrulyaman99@gmail.com</p>
          <p>Location: Aydın/Türkiye</p>
        </div>
        <div className='app__about-footer_links'>
          <a href='https://www.linkedin.com/in/ertugrul-yaman-developer/'><BsLinkedin  color='#fff' size={20}/></a>
          <a href='https://github.com/ertugrulyamaan'><BsGithub    color='#fff' size={20}/></a>
          <a href='https://medium.com/@ertugrulyamaan'><BsMedium   color='#fff' size={20}/></a>
  
        </div>
        
      </div>
    </div>
  )
}

export default About