import './Header.css'

export function Header (){
    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='header-logo' src="/logosl.png" alt="logo Sunny Lab" />
            </div>
            <div className='header-labels'>
                <p className='header-label'>Inicio</p>
                <p className='header-label'>Servicios</p>
                <p className='header-label'>Ficha técnica</p>
                <p className='header-label'>Contacto</p> 
            </div>
        </header>
    )
}

export default Header

