import './Header.css'
import { Link } from "react-scroll";

export function Header({ isAdmin, setIsAdmin }) {
  const handleLogin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      const password = prompt("Ingrese contraseña de administrador:");
      if (password === "admin123") {
        setIsAdmin(true);
      } else if (password !== null) {
        alert("Contraseña incorrecta");
      }
    }
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='header-logo' src={`${import.meta.env.BASE_URL}logosl.png`} alt="logo Sunny Lab" />
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
