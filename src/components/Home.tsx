import './Home.scss'
import { DiCode, } from "react-icons/di";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubAlt } from "react-icons/vsc";



const HomePage = () => {
  return (
  <main id='home'>
    <div className='HomePage'>
        <div className='TextBox'>
          <p>Tudo bem? eu me chamo</p>
          <h1 className='NameBox'>Ian Vieira</h1>
          <p>E sou um Desenvolvedor Front-End</p>
        </div>
        <div className='ButtonBox'>
          <div className='ButtonArea'>
          <a href='https://github.com/Ianvi1' target='_blank' rel='noreferrer'>
          <VscGithubAlt className='GitHubIcon' />
          <p>Github</p>
          </a>
          </div>
          <div className='ButtonArea'>
          <a href='https://www.linkedin.com/in/ianvi/' target='_blank' rel='noreferrer'>
          <TiSocialLinkedin className='LinkedinIcon' />
          <p>Linkedin</p>
          </a>
          </div>
        </div>
        <div className='CodeBox'>
          <DiCode className='CodeIcon'/>
        </div>
    </div>
  </main>
  )
}

export default HomePage