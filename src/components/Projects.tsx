import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye, } from "react-icons/fa";
import './Projects.scss';
import project2 from "../../public/imageport2.png";
import project3 from "../../public/imageport3.png";
import project6 from "../../public/imageport6.png";

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
  { id: "project1", name: "Project Starbucks", text: "Projeto criado em HTML e CSS pelo curso B7Web, landing page responsivo, clone do starbucks.", img: <img className='TechImage' src={project2} />,techs: "Html e Css.", deploy:<a href='' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>,githb: <a href='https://github.com/Ianvi1/Starbucks-Layout' target='_blank' rel='noreferrer'>
  <VscGithubAlt className='GitHubIcon' />
  <p>Github</p>
</a>},
  { id: "project2", name: "Project Costs", text: "Projeto em React com api criada, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src={project6} />,techs: "React.", deploy:<a href='https://costs-react-eight.vercel.app/' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/CostsReact' target='_blank' rel='noreferrer'>
                          <VscGithubAlt className='GitHubIcon' />
                          <p>Github</p>
                        </a>},
  { id: "project3", name: "Project ModalPizza", text: "Projeto em JavaScript com api criada, modais com pizza, pelo curso B7Web.", img: <img className='TechImage' src={project3} />,techs: "Html, Css e JavaScript.", deploy:<a href='https://ianvi1.github.io/modalPizza/' target='_blank' rel='noreferrer'>
  <FaEye size={28} className='EyeIcon' />
  <p>Visualizar</p>
</a>, githb: <a href='https://github.com/Ianvi1/modalPizza' target='_blank' rel='noreferrer'>
                          <VscGithubAlt className='GitHubIcon' />
                          <p>Github</p>
                        </a>},
]
  const ProjectsPage: React.FC = () => {
    return (
      <main id='projects'>
        <div className='ProjectsPage'>
          <div className='TextAreaProjects'>
            <div className='GrimoriaArea'>
            <h1>Projeto em Destaque - Grimória:</h1>
            <div className='BarArea'></div>
            <a href='https://grimoria.com.br/' target='_blank'><img className='Grimoriaimg' src='/grimoriadestaque.png'/></a>
            </div>
            <h1>Outros Projetos</h1>
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