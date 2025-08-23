import './Body.css'

function Body (){
    return (
        <div className='body' style={{backgroundImage: `url('/estudio.png')`}}>
            <p className='body-text'>
                Bienvenido a Sunny Lab, tu espacio creativo en Quilpué. <br />
                Un lugar donde tus ideas se transforman en experiencias. <br />
                Composición · Grabación · Clases · Estudio · Colab
            </p>
        </div>
    )
}

export default Body