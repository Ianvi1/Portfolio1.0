import './Skills.sass'
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";



const frontendTech = [
  { id: "html", name: "HTML", text: "2 Anos de Experiência", icon: <FaHtml5 className='HtmlIcon icon'/> },
  { id: "css", name: "CSS", text: "2 Anos de Experiência",  icon: <FaCss3Alt className='CssIcon icon'/> },
  { id: "js", name: "JavaScript", text: "2 Anos de Experiência", icon: <IoLogoJavascript className='JsIcon icon'/> },
  { id: "ts", name: "TypeScript", text: "2 Anos de Experiência", icon: <SiTypescript className='TsIcon icon'/> },
  { id: "react", name: "React", text: "1 Anos de Experiência", icon: <FaReact className='ReactIcon icon'/> },
  { id: "bootstrap", name: "Bootstrap", text: "1 Anos de Experiência", icon: <FaBootstrap className='BsIcon icon'/> },
  { id: "sass", name: "Sass", text: "1 Anos de Experiência", icon: <FaSass className='SassIcon icon'/> },
  { id: "next", name: "Next", text: "6 Meses de Experiência", icon: <SiNextdotjs className='NextIcon icon'/> },
]

const backendTech = [
  { id: "mysql", name: "MySql", text: "1 ano de Experiência", icon: <GrMysql className='MySqlIcon icon'/>},
  { id: "node", name: "Node", text: "6 meses de Experiência", icon: <FaNodeJs className='NodeIcon icon'/> },
  { id: "mongodb", name: "MongoDB", text: "Desenvolvendo", icon: <SiMongodb className='MongoDbIcon icon'/>},
  { id: "postgre", name: "Postgre", text: "Desenvolvendo", icon: <BiLogoPostgresql className='PostGreIcon icon'/>},
  { id: "express", name: "Express", text: "Em breve", icon: <SiExpress className='ExpressIcon icon'/>},
  { id: "java", name: "Java", text: "Em breve", icon: <FaJava className='JavaIcon icon'/>},
  
]

const SkillsPage = () => {
  return (
    <main id='skills'>
      <div className='SkillsPage'>
        <div className='TextArea'>
            <h1>Front-End</h1>
            <div className='BarArea'></div>
            </div>
        <div className='SkillsArea'>
            {frontendTech.map((tech) => (
             <div className='TechCard' id={tech.id} key={tech.id}>
              {tech.icon}
              <div className='TechInfo'>
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
             </div>
            ))}
            <div className='BarTop'></div>         
          </div>
        </div>
        <div className='SkillsPage'>
        <div className='TextArea'>
            <h1>Back-End</h1>
            <div className='BarArea'></div>
            </div>
        <div className='SkillsArea'>
            {backendTech.map((tech) => (
             <div className='TechCard' id={tech.id} key={tech.id}>
              {tech.icon}
              <div className='TechInfo'>
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
              </div>
             </div>
            ))}
            <div className='BarTop'></div>         
          </div>
        </div>          
    </main>
  )
}

export default SkillsPage
