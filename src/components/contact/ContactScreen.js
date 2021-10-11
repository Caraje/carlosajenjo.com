import React, { useState } from 'react'
import { MenuBar } from '../ui/MenuBar'
import { Footer } from '../ui/Footer'
import { ContactModule } from './ContactModule'


export const ContactScreen = () => {
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
            <MenuBar />
            <div className="contenedor">
              <ContactModule />
            <footer className="footer footer-contact ">
                <Footer />
            </footer>
            </div>
        </>
  )
}
