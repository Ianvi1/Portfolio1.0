import './Footer.scss'
import { TiSocialLinkedin } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import logoianvi from "/public/LogoDark.png";

const Footer = () => {
  return (
    <footer className='FooterPage'>
      <div className='FooterArea'>
          <p>
            Ian Vieira © 2024. Todos os direitos reservados.
          </p>
          <ul>
            <li className='InstagramIcon'><a href="https://www.instagram.com/ianvmc1/"><CiInstagram size={28}/></a></li>
            <li className='TwitchIcon'><a href="https://www.twitch.tv/ianvi_"><FaTwitch size={28}/></a></li>
            <li className='LinkedinIcon'><a href="https://www.linkedin.com/in/ianvi/"><TiSocialLinkedin size={28}/></a></li>
          </ul> 
          <img src={logoianvi} alt="Logo" />
      </div>
    </footer>
  )
}

export default Footer
