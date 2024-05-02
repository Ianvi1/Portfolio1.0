import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye, } from "react-icons/fa";
import './Projects.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';

interface Project {
  id: string;
  name: string;
  text: string;
  img: JSX.Element;
  techs: string;
  deploy: JSX.Element;
  githb: JSX.Element;
} 

const projectsTech: Project[] = [
  { id: "project1", name: "Project Awax", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page.", img: <img className='TechImage' src='../../public/imageport1.png' />, techs: "Html e Css.", deploy:<a href='' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/AwaxPJ' target='_blank' rel='noreferrer'>
  <VscGithubAlt className='GitHubIcon' />
  <p>Github</p>
</a>},
  { id: "project2", name: "Project Starbucks", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page responsivo, clone do starbucks.", img: <img className='TechImage' src='../../public/imageport2.png' />,techs: "Html e Css.", deploy:<a href='' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>,githb: <a href='https://github.com/Ianvi1/Starbucks-Layout' target='_blank' rel='noreferrer'>
  <VscGithubAlt className='GitHubIcon' />
  <p>Github</p>
</a>},
  { id: "project3", name: "Project Costs", text: "Projeto em React com api criada, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/imageport6.png' />,techs: "React.", deploy:<a href='https://costs-react-eight.vercel.app/' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/CostsReact' target='_blank' rel='noreferrer'>
                          <VscGithubAlt className='GitHubIcon' />
                          <p>Github</p>
                        </a>},
  { id: "project4", name: "Project MultiStep", text: "Projeto em React usando um formulário, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/imageport5.png'/>,techs: "React.",deploy:<a href='' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/MultistepReact' target='_blank' rel='noreferrer'>
  <VscGithubAlt className='GitHubIcon' />
  <p>Github</p>
</a>},
  { id: "project5", name: "Project ModalPizza", text: "Projeto em JavaScript com api criada, modais com pizza, pelo curso B7Web.", img: <img className='TechImage' src='../../public/imageport3.png' />,techs: "Html, Css e JavaScript.", deploy:<a href='https://ianvi1.github.io/modalPizza/' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/modalPizza' target='_blank' rel='noreferrer'>
                          <VscGithubAlt className='GitHubIcon' />
                          <p>Github</p>
                        </a>},
  { id: "project6", name: "Project GitHub Search", text: "Projeto em React, api github, com Typescript, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/imageport4.png' />,techs: "React e TypeScript.", deploy:<a href='' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>,githb: <a href='https://github.com/Ianvi1/GitHubReact' target='_blank' rel='noreferrer'>
  <VscGithubAlt className='GitHubIcon' />
  <p>Github</p>
</a>}]

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
                        {pj.githb}
                      </div>
                      <div className='ButtonArea Buttons'>
                        {pj.deploy}
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