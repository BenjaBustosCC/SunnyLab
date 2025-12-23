import './Header.css'
import { Link } from "react-scroll";

export function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='header-logo' src="/SunnyLab/logosl.png" alt="logo Sunny Lab" />
      </div>
      <div className='header-labels'>
        <Link
          to="hero"
          smooth={true}
          duration={100}
          spy={true}
          activeClass="active"
          className='header-label'
        >
          Inicio
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={100}
          spy={true}
          activeClass="active"
          className='header-label'
        >
          Servicios
        </Link>
        <Link
          to="technical-specs"
          smooth={true}
          duration={100}
          spy={true}
          activeClass="active"
          className='header-label'
        >
          Ficha técnica
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={100}
          spy={true}
          activeClass="active"
          className='header-label'
        >
          Contacto
        </Link>
      </div>
    </header>
  )
}

export default Header
