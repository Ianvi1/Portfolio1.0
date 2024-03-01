import './Projects.sass'
import { VscGithubAlt } from "react-icons/vsc";
import { FaEye } from "react-icons/fa";


const ProjectsPage = () => {
  return (
    <main>
      <div className='ProjectsPage'>
      <div className='TextArea'>
            <h1>Projetos</h1>
            <div className='BarArea'></div>
      </div>
        <div className='ProjectsArea'>
          <div className='ProjectsBox'>
            <div className='ProjectImage'>
              imagem
            </div>
            <div className='ProjectText'>
            <h3>Projeto1</h3>
            <p>meu primeiro projeto feito em html,css.</p>
            </div>
            <div className='TechUsage'>
              html,css,icon.
            </div>
            <div className='ButtonArea'>
              <a href='https://github.com/Ianvi1' target='_blank' rel='noreferrer'>
              <VscGithubAlt className='GitHubIcon' />
              <p>Github</p>
              </a>
            </div>
            <div className='ButtonArea'>
              <a href='https://github.com/Ianvi1' target='_blank' rel='noreferrer'>
              <FaEye className='EyeIcon' />
              <p>Visualizar</p>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage