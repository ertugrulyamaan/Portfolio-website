import React from 'react'
import './project.css'


import bank from '../../assets/bank-app.png'
import gpt3 from '../../assets/gpt3.png'
import restaurant from '../../assets/restaurant.png'


const data = [
    {
      id:1,
      img:bank,
      title:'HookBank App',
      links:'https://ertugrulyamaan-bank-app.netlify.app/',
      github:'https://github.com/ertugrulyamaan/bankApp-webpage',
    },
    { 
      id:2,
      img:restaurant,
      title:'Restaurant Page',
      links:'https://ertugrulyamaan-geritch.netlify.app/',
      github:'https://github.com/ertugrulyamaan/Geritch-Webpage',
    },
    {
      id:3,
      img:gpt3,
      title:'GPT-3 Page',
      links:'https://ertugrulyamaan-gpt3.netlify.app/',
      github:'https://github.com/ertugrulyamaan/gpt3-webpage'
    },
]




const Projects = () => {
  return (
    <div className='app__project section__padding'>
      <div className='app__project-header'>
        <h2>Project</h2>
      </div>
      <div className='app__project-cards'>
        {data.map((project)=>(
          <div className='app__project-cards_card' key={project.id}>
            <a href={project.links}><img src={project.img}  alt={project.title}/></a>
              <div className='app__project-cards_card-header'>
                <h4>{project.title}</h4>
                <a href={project.github}>Github</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects