import React from 'react'
import { Redirect, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getWorkByTitle } from '../../selectors/getWorkByTitle'
import { Footer } from '../ui/Footer'
import { MenuBar } from '../ui/MenuBar'
import { ImagePortfolio } from './ImagePortfolio'
import { TecPortfolio } from './TecPortfolio'

export const PortfolioProyect = () => {
    
    const { workName } = useParams()
    const work = getWorkByTitle( workName )
    
    if ( !work ) {
        return <Redirect to= "/portfolio" />
    }
    
    const {
        title,
        description, 
        imagen, 
        tecnologies, 
        pictures,
        github,
        demo
    } = work

    console.log(github)

    return (
        <div>
            <MenuBar />
            <div className="container portfolioProject">
                <img className="portfolioProject__header" src={`/assets/images/portfolio/${title}/${ imagen }` } alt={ `Foto principal de ${ title }` } />  
                <div className=" portfolioProject__info ">
                    <h2 className=" portfolioProject__info__title ">{title}</h2>
                    <div className=" portfolioProject__info__text ">
                        {
                            description ?
                            <div>
                            {   
                                description.map( ( text, i ) => (
                                    <p key={ i }> { text } </p>
                                ))                           
                            } 
                            
                        </div>
                        :null
                        }

                        <div className="portfolioProject__info__text__container ">
                            <div className="portfolioProject__info__text__container__tec">

                            {
                                tecnologies.map(( tecnologies, i ) => (
                                    <div key={i} className="portfolioProject__info__text__container__tec__img">
                                        <TecPortfolio tec={tecnologies} />
                                    </div>
                                ))
                            }
                            </div >

                            <div className="portfolioProject__info__text__container__tec__buttons">
                            {
                                    github 
                                    ? 
                                        <a className="portfolioProject__info__text__container__btn" href={ github } target="_blank" rel="noreferrer" >
                                            Github <i className="fab fa-github"></i>
                                        </a>  
                                    : null                     
                                }

                                {
                                    demo 
                                    ? 
                                        <a className="portfolioProject__info__text__container__btn" href={ demo } target="_blank" rel="noreferrer" >
                                            Demo <i className="fas fa-laptop"></i>
                                        </a>  
                                    : null                     
                                }
                            </div>
                            
                        </div>
                        {
                            pictures ?
                            <div className="portfolioProject__info__album" >                            
                                {
                                    pictures.map(( pictures, i ) => (
                                        <div key={ i } className="">
                                            <ImagePortfolio 
                                                pictures={ pictures } 
                                                path={ title }
                                            />
                                        </div>
                                    ))
                                } 
                            </div>
                            : null
                        }

                    </div>
                        <Link className="portfolioProject__info__btn" to="/portfolio" >
                            Volver
                        </Link>
                </div>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}
