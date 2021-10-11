import React, { useState } from 'react'

export const ContactModule2 = () => {

    const [nombre, setNombre] = useState("")
    const [consulta, setConsulta] = useState("")
    const [email, setEmail] = useState("")
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(nombre)
      console.log(consulta)
      console.log(email )
    
    }
    
    return (
        <>
            
            <div className="contenedor">
                <h2 className="title__form">Contacto</h2>
            
                <div className="form">
                    <form className="form__group" onSubmit={handleSubmit}>

                        <textarea 
                        cols="30" 
                        rows="10"
                        className="form__group__text"
                        type="text"
                        id="texto"
                        name="consulta"
                        value={consulta}
                        onChange={(event) => setConsulta(event.target.value)}
                        placeholder="Escriba su consulta:"
                    />

                    <input 
                        className="form__group__input"
                        type="text" 
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        placeholder="Nombre:"
                        required
                    />

                    <input 
                        className="form__group__input"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo Electronico"  
                        required
                    />
                    <button className="form__group__btn">Enviar</button>
                    </form>
                </div>

            </div>
        </>
    )
}
