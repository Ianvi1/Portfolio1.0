import './About.sass'
import { IoMdDownload } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";


const AboutPage = () => {
  return (
    <main id='about'>
      <div className='AboutPage'>
        <div className='ProfileArea'>
          <img className='Image' src='../../public/perfil2.0.jpg'></img>
          <div className='ButtonArea About'>
          <a href='' target='_blank' rel='noreferrer'>
          <IoMdDownload className='DownloadIcon' />
          <p>Curriculo</p>
          </a>
          </div>
        </div>
        <div className='AboutArea'>
          <h1 className='Bar'>SOBRE MIM</h1>
          <p>Nascido em São Paulo, no ano de 2021 decidi me tornar um <span>desenvolvedor</span>, estudando por conta própria
             e vendo vídeos para entender tudo sobre, e até fazendo cursos pagos, já trabalhei com TI, e atualmente estou em busca 
             de aplicação no mercado de desenvolvimento web como <span>front-end</span>, buscando em me tornar <span>fullstack</span> futuramente. No momento eu apenas trabalho voluntariamente
             com programação de um projeto start-up de uma empresa sem ganhos financeiros, e por enquanto estou cursando no meu ultimo semestre na área de manutenção e suporte em computadores.
             Sou uma pessoa que sempre irá buscar aprender algo na área de qualquer forma que seja, pois aprender é um habito que sempre devemos ter.</p>
          <div className='AboutInfo'>
            <AiOutlineMail className='AboutIcon'/>
            <div>
            <p>Ianmarques619@gmail.com</p>
            </div>
            <FaMapMarkerAlt className='AboutIcon'/>
            <div>
            <p>São Paulo - SP</p>
            </div>
          </div>
        </div> 
      </div>  
    </main>

  )
}

export default AboutPage
