import './Projects.sass'
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTypescript, } from "react-icons/si";

const projectsTech = [
  { id: "project1", name: "Project Awax", text: "Projeto criado em HTML e CSS pelo curso B7Web,landing page.", img: <img className='TechImage' src='../../public/projectsPortfolio.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/> },
  { id: "project2", name: "Project Starbucks", text: "Projeto criado em HTML e CSS pelo curso B7Web,landing page responsivo, clone do starbucks.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/> },
  { id: "project3", name: "Project Costs", text: "Projeto em React com api criada, pelo curso React do 'Matheus Battisti' no youtube.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/> },
  { id: "project4", name: "Project MultiStep", text: "Projeto em React usando um formulário, pelo curso React do 'Matheus Battisti' no youtube.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/> },
  { id: "project5", name: "Project ModalPizza", text: "Projeto em JavaScript com api criada, modais com pizza, pelo curso B7Web.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>},  
  { id: "project6", name: "Project GitHubSearch", text: "Projeto em React com Api do Github,  e usando typescript, pelo curso React do 'Matheus Battisti'.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon'/>, icon2: <FaCss3Alt className='CssIcon icon'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>, icon4:<FaReact className='ReactIcon icon tech'/>, icon5:<SiTypescript className='TsIcon icon tech'/>},
  { id: "project7", name: "Project Login/Cadastro", text: "Projeto de login e cadastro usando javascript, projeto pessoal.", img: <img className='TechImage' src='../../public/projectsPortfolio2.png' />, icon1: <FaHtml5 className='HtmlIcon icon tech'/>, icon2: <FaCss3Alt className='CssIcon icon tech'/>, icon3:<IoLogoJavascript className='JsIcon icon tech'/>}
]


const ProjectsPage = () => {
  return (
    <main>
      <div className='ProjectsPage'>
      <div className='TextArea'>
            <h1>Projetos</h1>
            <div className='BarArea'></div>
      </div> tech
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
            <div className='ButtonsArea '>
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

export default ProjectsPage