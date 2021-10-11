import React from 'react'
import { ContactModule } from '../contact/ContactModule'
import { Footer } from '../ui/Footer'
import { MenuBar } from '../ui/MenuBar'


export const AboutScreen = () => {
    return (
        <div className="contenedor">
            <header>
                <MenuBar />
            </header>
            <main className="container aboutpage">
                <section className="about-container">
                    <img className="about-container__img" title="Carlos Ajenjo" src="./assets/images/Carlos_about.jpg" alt="Carlos Ajenjo Diseñador y desarrollador Web"/>
                    <article className="about-container__section">
                        <h2 className="about-container__section__title">Quien Soy</h2>
                        <p className="about-container__section__text">
                            A lo largo de mi vida profesional, Casi siempre he alcanzado puestas de responsabilidad para las empresas que he trabajado o colaborado, sin importar mi experiencia previa en el sector.
                        </p>
                        <p className="about-container__section__text">
                            Esto ha sido gracias a <span>mi capacidad de adaptarme </span> a las diferentes situaciones, a la capacidad de aprender y especialmente por afrontar los retos que se me han planteado profesionalmente.
                        </p>
                        <p className="about-container__section__text">
                            Mis inquietudes personales me han llevado a ser autodidacta, aprendiendo todo aquello que de una manera o de otra me interesaba y podía ofrecerme nuevas posibilidades laborales, lo que me ha llevado a <span>trabajar como diseñador gráfico</span> los últimos 15 años, hasta que descubrí mi interés en el <span>Desarrollo Web</span>, al tener que preparar un trabajo en plena pandemia.
                        </p>
                        <p className="about-container__section__text">
                            Desde hace aproximadamente un año, he estado formándome en <span>HTML</span>, <span>CSS</span> y especialmente en <span>JavaScript</span>, mas tarde di el salto a <span>React</span>, para comenzar a interesarme por Node.js y Sass.
                        </p>
                        <p className="about-container__section__text">
                            Tengo en mi lista de pendientes otros lenguajes de programación que espero aprender también mientras perfecciono mis conocimientos en los actuales.
                        </p>
                        <p className="about-container__section__text">
                            Me gustan los retos, y cuando me meto en un nuevo proyecto, este ocupa gran parte de mi tiempo hasta lograr hacer el mejor trabajo que pueda ofrecer.
                        </p>

                    </article>
                </section>
            </main>
            <div className="tecno">
                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-html5"></i>
                                <h3 className="tecno__group__text">HTML </h3>
                            </div>

                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-css3-alt"></i>
                                <h3 className="tecno__group__text">CSS</h3>
                            </div>

                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-js-square"></i>
                                <h3 className="tecno__group__text">Javascript</h3>
                            </div>

                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-react"></i>
                                <h3 className="tecno__group__text">React</h3>
                            </div>

                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-node-js"></i>
                                <h3 className="tecno__group__text">Node.js</h3>
                            </div>

                            <div className="tecno__group">
                                <i className="tecno__group__icon fab fa-sass"></i>
                                <h3 className="tecno__group__text">Sass</h3>
                            </div>  
        </div>
        <div className="contenedor">
            <ContactModule />
        </div>

            <footer className="footer footer-about ">
                <Footer />
            </footer>

        </div>
    )
}
