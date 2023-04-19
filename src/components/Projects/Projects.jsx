import React from 'react'
import './project.css'


import bank from '../../assets/bank-app.png'
import gpt3 from '../../assets/gpt3.png'
import restaurant from '../../assets/restaurant.png'
import movie from '../../assets/movie.png'


const data = [
    {
      id:1,
      img:movie,
      title:'MINFLIX App',
      tech:'HTML, Tailwind CSS, Javascript, React.js, React-router-dom, Redux, axios',
      links:'https://minflix-ertu.vercel.app/',
      github:'https://github.com/ertugrulyamaan/minflix',
    },
    {
      id:2,
      img:bank,
      title:'HookBank App',
      tech:'HTML, Tailwind CSS, Javascript, React.js',
      links:'https://ertugrulyamaan-bank-app.netlify.app/',
      github:'https://github.com/ertugrulyamaan/bankApp-webpage',
    },
    { 
      id:3,
      img:restaurant,
      title:'Restaurant Page',
      tech:'HTML, CSS, Javascript, React.js',
      links:'https://ertugrulyamaan-geritch.netlify.app/',
      github:'https://github.com/ertugrulyamaan/Geritch-Webpage',
    },
    {
      id:4,
      img:gpt3,
      title:'GPT-3 Page',
      tech:'HTML CSS Javascript React.js',
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
                <p>Technologies: <span>{project.tech}</span></p>
                <a href={project.github}>Github</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects