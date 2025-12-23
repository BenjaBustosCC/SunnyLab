import "./ContactForm.css"

function ContactForm (){
    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title">Contacto</h2>
            <form className="contact-form">
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo electrónico" />
                <textarea placeholder="Mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;