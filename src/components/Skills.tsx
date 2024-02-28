import './Skills.sass'
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTypescript } from "react-icons/si";



const SkillsPage = () => {
  return (
    <main>
      <div className='SkillsPage'>
        <div className='SkillsArea'>
          <div className='TextArea'>
            <h1>Front-End</h1>
            <div className='BarArea'></div>
        <div className='IconsArea'>
            <FaReact className='ReactIcon'/>
            <p>React</p>
            <p>1 Ano de Experiência</p>
            <div className='ColumnBarLeft'></div>
            <div className='ColumnBarRight'></div>
        </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SkillsPage
