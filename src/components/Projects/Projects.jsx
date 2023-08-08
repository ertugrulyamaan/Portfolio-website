import React from 'react'
import './project.css'

import gpt3 from '../../assets/gpt3.png'
import restaurant from '../../assets/restaurant.png'
import movie from '../../assets/movie.png'
import blog from '../../assets/blog.jpeg'

const data = [
    {
      id:1,
      img:movie,
      title:'MINFLIX App',
      tech:'Tailwind, Javascript, React.js, React-router-dom, Context, axios',
      links:'https://minflix-ertu.vercel.app/',
      github:'https://github.com/ertugrulyamaan/minflix',
    },
    {
      id:2,
      img:blog,
      title:'Blog Project',
      tech:'Tailwind, TypeScript, Next.js, Next-Auth, Bcrypt, MongoDB, Prisma,',
      links:'https://blog-next-ertu.vercel.app/',
      github:'https://github.com/ertugrulyamaan/blog-next',
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
            <a href={project.links} target='_blank'><img src={project.img}  alt={project.title}/></a>
              <div className='app__project-cards_card-header'>
                <h4>{project.title}</h4>
                <p>Technologies: <span>{project.tech}</span></p>
                <a href={project.github} target='_blank'>Github</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects