import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import './Projects.sass';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Project {
  id: string;
  name: string;
  text: string;
  img: JSX.Element;
  icon1?: JSX.Element;
  icon2?: JSX.Element;
  icon3?: JSX.Element;
  icon4?: JSX.Element;
  icon5?: JSX.Element;
}

const projectsTech: Project[] = [
  { id: "project1", name: "Project Awax", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page.", img: <img className='TechImage' src='../../public/projectsPortfolio.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/> },
  { id: "project2", name: "Project Starbucks", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page responsivo, clone do starbucks.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/> },
  { id: "project3", name: "Project Costs", text: "Projeto em React com api criada, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio3.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/> },
  { id: "project4", name: "Project MultiStep", text: "Projeto em React usando um formulário, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio4.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/> },
  { id: "project5", name: "Project ModalPizza", text: "Projeto em JavaScript com api criada, modais com pizza, pelo curso B7Web.", img: <img className='TechImage' src='../../public/projectsPortfolio5.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>},  
  { id: "project6", name: "Project GitHubSearch", text: "Projeto em React com api do Github,  e usando Typescript, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio7.png' />, icon1: <FaHtml5 className='HtmlIcon icon'/>, icon2: <FaCss3Alt className='CssIcon icon'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/>, icon5:<SiTypescript className='TsIcon icon tech'/>},
  { id: "project7", name: "Project Login/Cadastro", text: "Projeto de login e cadastro usando javascript, projeto pessoal.", img: <img className='TechImage' src='../../public/projectsPortfolio6.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>}
]

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
                    <div className='TechIcon'>
                      {pj.icon1}
                      {pj.icon2}
                      {pj.icon3}
                      {pj.icon4}
                      {pj.icon5}
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
                        <FaEye className='EyeIcon' />
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