import React from 'react'
import { PortfolioSeccion } from '../Portfolio/PortfolioSeccion'
import { Footer } from '../ui/Footer'

import { NavMenu } from '../ui/NavMenu'
import { SocialNetworkMenu } from '../ui/SocialNetworkMenu'
import { Tecnologies } from '../ui/Tecnologies'

export const HomeScreen = () => {

    return (
        <>  

                <header className="home">
                    <div className="home__logo">
                        <img className="home__logo__img" src="./assets/logos/logov.png" alt="Logo Carlos Ajenjo"/>
                        {/* <h2 className="home__logo__text">Carlos Ajenjo</h2> */}
                    <h1 className="home__title">Diseño y Desarrollo Web</h1>

                    <div className="home__menu">
                        <NavMenu />
                    </div>
                    <div className="home__socialnetwork">
                        <SocialNetworkMenu />
                    </div>
                    </div>
                </header>
            <main id="about" className="about">
                <div className="about__container">
                    <img title="Carlosajenjo.com" className="about__container__img" src="./assets/Carlos.webp" alt="Imagen de carlos ajenjo"/>
                    <div className="about__container__text">
                        <h2 className="about__container__text__title">Sobre Mi</h2>
                        <p className=" about__container__text__parragraph">
                            Soy<span> Carlos Ajenjo.</span>
                        </p>
                        <p className=" about__container__text__parragraph">
                            He trabajado como <span>diseñador</span> los últimos 15 años, Y en el ultimo año he comenzado a convertirme en <span> el mejor desarrollador web</span> que pueda llegar a ser.
                        </p>
                        <p className=" about__container__text__parragraph">                        
                            Y soy una de <span>las mejores opciones </span> para tu proyecto o negocio.
                        </p>
                        <a className="about__buttom" href="/about" rel="noreferrer">Leer Más</a>
                    </div>
                </div>
            </main>
            <section className="tecnologies">
                <h2 className="tecnologies__title">Tecnologias</h2>
                <Tecnologies />    
            </section>
            <section className="portfolio">
                <h2 className="portfolio__title">Portfolio</h2>
                <div className="portfolio__container">
                    <PortfolioSeccion limit= { 2 } />
                </div>
            </section>

            <footer className="footer">
                <Footer />
            </footer>

        </>
    )
}
