import './Hero.css'

function Hero (){
    return (
        <div className='body' style={{backgroundImage: `url('/estudio.png')`}}>
            <p className='body-text'>
                Bienvenido a Sunny Lab, tu espacio creativo en Quilpué. <br />
                Un lugar donde tus ideas se transforman en experiencias.
            </p>
        </div>
    )
}

export default Hero;