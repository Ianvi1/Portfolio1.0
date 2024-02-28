import {Link} from "react-router-dom";
import logoianvi from "../img/logoianvi.png";
import './Navbar.sass'

const Navbar = () => {
  return (
  <header>
      <nav>
        <div className="logo">
          <img src={logoianvi} />
        </div>
        <h1>Ian Vieira</h1>
      <ul className="links">
          <li>
         <Link to="/"><a>Início<div className="bar"></div></a></Link>
         </li>
        <li>
         <Link to="/about"><a>Sobre<div className="bar"></div></a></Link>
        </li>
        <li>
         <Link to="/skills"><a>Habilidades<div className="bar"></div></a></Link>
        </li>
        <li>
         <Link to="/projects"><a>Projetos<div className="bar"></div></a></Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar
