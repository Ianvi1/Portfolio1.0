import './About.scss'
import { IoMdDownload } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import perfil from "../../public/perfil4.0.jpg";
import curriculo from "../../public/Curriculo Ian.pdf";


const AboutPage = () => {
  return (
    <main id='about'>
      <div className='AboutPage'>
        <div className='ProfileArea'>
            <img className='Image' src={perfil}></img>
            <div className='ButtonArea About'>
            <a href={curriculo} target='_blank' rel='noreferrer'>
            <IoMdDownload className='DownloadIcon' />
            <p>Curriculo</p>
            </a>
            </div>
        </div>
        <div className='AboutArea'>
            <h1 className='Bar'>SOBRE MIM</h1>
            <p>Sou de São Paulo, no ano de 2021 eu fiz uma escolha de me tornar um <span>desenvolvedor</span>, e desde então transformo ideias
              e conceitos em um site moderno e atual. Atuo também como designer gráfico e atualmente estou em busca 
              de aplicação no mercado de "Desenvolvimento Web" como <span>front-end</span>.
              <br></br> Como desenvolvedor, tenho 3 anos de experiência como freelancer, com um projeto de uma empresa destacado chamado <span>"GRIMORIA"</span>.
              Tenho confiança no meu trabalho, sou bastante ambicioso e dedicado nos meus projetos, focado em fornecer a melhor experiência para o usuário. </p>
            <div className='AboutInfo'>
              <AiOutlineMail className='AboutIcon'/>
              <div>
              <p>ianvicontato@gmail.com</p>
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
