import './Footer.scss'
import { TiSocialLinkedin } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import logoianvi from "/public/iv.png";

const Footer = () => {
  return (
    <footer className='FooterPage'>
      <div className='FooterArea'>
          <p>
            Ian Vieira © 2025. Todos os direitos reservados.
          </p>
          <ul>
            <li className='InstagramIcon'><a href="https://www.instagram.com/ianvii_/" target='blank'><CiInstagram size={28}/></a></li>
            <li className='TwitchIcon'><a href="https://www.twitch.tv/ianvi_" target='blank'><FaTwitch size={28}/></a></li>
            <li className='LinkedinIcon'><a href="https://www.linkedin.com/in/ianvi/" target='blank'><TiSocialLinkedin size={28}/></a></li>
          </ul> 
          <img src={logoianvi} alt="Logo" />
      </div>
    </footer>
  )
}

export default Footer
