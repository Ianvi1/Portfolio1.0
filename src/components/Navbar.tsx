import logoianvi from "../img/logoianvi.png";
import './Navbar.sass'

const Navbar = () => {

  
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logoianvi} alt="Logo" />
        </div>
        <h1>Ian Vieira</h1>
        <ul className="links">
          <li>
              <a href="#home" className="active">
                Início
              </a>
          </li>
          <li>
            <a href="#about">
                Sobre
              </a>
          </li>
          <li>
          <a href="#skills">
                Habilidades
              </a>
          </li>
          <li>
          <a href="#projects">
                Projetos
              </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;