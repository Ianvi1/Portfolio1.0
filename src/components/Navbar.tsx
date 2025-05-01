import { useState } from 'react';
import logoianvi from "/public/iv.png";
import './Navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // fecha o menu após clicar
  };

  return (
    <header className="header">
      <div className="LogoArea">
        <img src={logoianvi} alt="Logo" />
        <h1>Ian Vieira</h1>
      </div>

      <div className="Hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
      </div>

      <nav className={`NavBar ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => handleLinkClick('#home')}>Home</a>
        <a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={() => handleLinkClick('#about')}>Sobre</a>
        <a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => handleLinkClick('#skills')}>Habilidades</a>
        <a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleLinkClick('#projects')}>Projetos</a>
      </nav>
    </header>
  );
};

export default Navbar;
