import './Header.css'
import { Link } from "react-scroll"
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export function Header({ isAdmin, setIsAdmin }) {
  const [showLogin, setShowLogin] = useState(false)
  const [closing, setClosing] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === "sunny" && password === "admin123") {
      setIsAdmin(true)
      setShowLogin(false)
      setUsername("")
      setPassword("")
      navigate('/admin');
    } else {
      alert("Credenciales incorrectas")
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    navigate('/');
  }

  const closeLogin = () => {
    setClosing(true)
    setTimeout(() => {
      setShowLogin(false)
      setClosing(false)
    }, 200)
  }

  // Helper to handle navigation to home sections if on admin page
  const handleNavClick = (to) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Timeout to allow navigation before scrolling? 
      // react-scroll handles scrolling on the same page. 
      // If we navigate to '/', the component mounts and scrolls to top by default usually.
      // To scroll to specific section after nav requires more logic (e.g. state or hash).
      // For now, just going to home is acceptable behavior.
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src={`${import.meta.env.BASE_URL}logosl.png`}
          alt="logo Sunny Lab"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <nav className="header-labels">
        <Link
          to="hero"
          smooth duration={100}
          spy activeClass="active"
          className="header-item"
          onClick={() => handleNavClick('hero')}
        >
          Inicio
        </Link>
        <Link
          to="services"
          smooth duration={100}
          spy activeClass="active"
          className="header-item"
          onClick={() => handleNavClick('services')}
        >
          Servicios
        </Link>
        <Link
          to="technical-specs"
          smooth duration={100}
          spy activeClass="active"
          className="header-item"
          onClick={() => handleNavClick('technical-specs')}
        >
          Ficha técnica
        </Link>
        <Link
          to="contact"
          smooth duration={100}
          spy activeClass="active"
          className="header-item"
          onClick={() => handleNavClick('contact')}
        >
          Contacto
        </Link>

        {isAdmin ? (
          <button onClick={handleLogout} className="header-item">
            Salir
          </button>
        ) : showLogin ? (
          <form
            onSubmit={handleLogin}
            className={`login-form ${closing ? "exit" : ""}`}
          >
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="header-item">
              Entrar
            </button>
            <button
              type="button"
              onClick={closeLogin}
              className="header-item"
            >
              ✕
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="header-item"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header
