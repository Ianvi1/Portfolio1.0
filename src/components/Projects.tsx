import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye, } from "react-icons/fa";
import './Projects.sass';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Project {
  id: string;
  name: string;
  text: string;
  img: JSX.Element;
  techs: string;
}

const projectsTech: Project[] = [
  { id: "project1", name: "Project Awax", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page.", img: <img className='TechImage' src='../../public/projectsPortfolio.png' />, techs: "Html e Css."},
  { id: "project2", name: "Project Starbucks", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page responsivo, clone do starbucks.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />,techs: "Html e Css."},
  { id: "project3", name: "Project Costs", text: "Projeto em React com api criada, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio3.png' />,techs: "React."},
  { id: "project4", name: "Project MultiStep", text: "Projeto em React usando um formulário, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio4.png'/>,techs: "React."},
  { id: "project5", name: "Project ModalPizza", text: "Projeto em JavaScript com api criada, modais com pizza, pelo curso B7Web.", img: <img className='TechImage' src='../../public/projectsPortfolio5.png' />,techs: "Html, Css e JavaScript."},  
  { id: "project6", name: "Project GitHubSearch", text: "Projeto em React, api github, com Typescript, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio7.png' />,techs: "React e TypeScript."}]

  const ProjectsPage: React.FC = () => {
    return (
      <main id='projects'>
        <div className='ProjectsPage'>
          <div className='TextAreaProjects'>
            <h1>Projetos</h1>
            <div className='BarArea'></div>
          </div>
          <div className='ProjectsArea'>
              {projectsTech.map((pj) => (   
                <div className='ProjectsBox'>
                    <div className='ProjectImage'>
                      {pj.img}
                    </div>
                    <div className='ProjectText'>
                      <h3>{pj.name}</h3>
                      <p>{pj.text}</p>
                    </div>
                    <div className='TechUsage'>
                      <p>Tecnologias:</p>
                      <div className='TechTexts'>
                        {pj.techs}
                      </div>
                    </div>
                    <div className='ButtonsArea'>
                      <div className='ButtonArea Buttons'>
                        <a href='https://github.com/Ianvi1' target='_blank' rel='noreferrer'>
                          <VscGithubAlt className='GitHubIcon' />
                          <p>Github</p>
                        </a>
                      </div>
                      <div className='ButtonArea Buttons'>
                        <a href='https://github.com/Ianvi1' target='_blank' rel='noreferrer'>
                          <FaEye size={28} className='EyeIcon' />
                          <p>Visualizar</p>
                        </a>
                      </div>
                    </div>
                  </div>     
              ))}
          </div> 
        </div>
      </main>
    )
  }
  

export default ProjectsPage;