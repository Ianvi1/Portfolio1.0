import './About.sass'
import { IoMdDownload } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";


const AboutPage = () => {
  return (
    <main>
      <div className='AboutPage'>
        <div className='ImageArea'>
          <img className='ImageEdit' src='../../public/perfil.jpg'/>
          <div className='AboutInfo'>
            <div>
            <AiOutlineMail className='AboutIcon'/>
            <p>Email: Ianmarques619@gmail.com</p>
            </div>
            <div>
            <FaMapMarkerAlt className='AboutIcon'/>
            <p>São Paulo - SP</p>
            </div>
          </div>
          <div className='ButtonArea'>
          <a href='' target='_blank' rel='noreferrer'>
          <IoMdDownload className='DownloadIcon' />
          <p>Curriculo</p>
          </a>
          </div>
        </div>
        <div className='AboutArea'>
          <div className='Bar'></div>
          <h1>SOBRE MIM</h1>
          <p>Nascido em São Paulo, no ano de 2021 decidi me tornar um desenvolvedor, estudando por conta própria
             e vendo vídeos para entender tudo sobre, e até fazendo cursos pagos, já trabalhei com TI, e atualmente estou em busca 
             de aplicação no mercado de desenvolvimento web como front-end, buscando em me tornar fullstack futuramente, no momento eu apenas trabalho voluntariamente
             com programação de um projeto start-up de uma empresa sem ganhos financeiros ainda, e estou cursando no meu ultimo semestre na área de manutenção e suporte em computadores.
             Sou uma pessoa que sempre irá buscar aprender algo na área de qualquer forma que seja, pois aprender é um habito que sempre devemos ter.</p>
        </div> 
      </div>  
    </main>

  )
}

export default AboutPage
