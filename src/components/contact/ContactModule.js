import { send } from 'emailjs-com';
import React, { useState } from 'react'

export const ContactModule = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_9v2pb4s',
            'template_l705ttg', 
            toSend,
            'user_Y1kHNbFyduuggaNWwl630'
        )
        .then(( response ) => {
            console.log('Exito!', response.status, response.text);
            console.log(toSend)
            alert('Correo enviado correctamente')
        })
        .catch((err) => {
            alert('Hay un error, por favor intentelo mas tarde')
          });
        {/* --- METHOD TO SEND THE MAIL --- */}
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    return (
        <>
            
            <div className="contenedor">
                <h2 className="title__form">Contacto</h2>
            
                <div className="form">
                    <form className="form__group" onSubmit={ onSubmit }>

                        <textarea 
                        cols="30" 
                        rows="10"
                        className="form__group__text"
                        type="text"
                        id="texto"
                        name="message"
                        placeholder="Escriba su consulta:"
                        value={ toSend.message }
                        onChange={ handleChange }
                    />

                    <input 
                        className="form__group__input"
                        type="text" 
                        id="nombre"
                        name="to_name"
                        value={toSend.to_name}
                        onChange={ handleChange }
                        placeholder="Nombre:"
                        required
                    />

                    <input 
                        className="form__group__input"
                        type="email"
                        id="email"
                        name="reply_to"
                        value={ toSend.reply_to }
                        onChange={ handleChange }
                        placeholder="Correo Electronico"  
                        required
                    />
                    <button type="submit" className="form__group__btn">Enviar</button>
                    </form>
                </div>

            </div>
        </>
    )
}
