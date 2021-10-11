import React from 'react'
import { Link } from 'react-router-dom'
import { TecPortfolio } from './TecPortfolio'

export const CardPortfolio = ( { id, title, description,descriptionShort , img, tec, url, pictures }) => {
    return (
        <div className="cardPortfolio">
            <img className="cardPortfolio__img" src={`./assets/images/portfolio/${ title }/${ img }` } alt={ `Foto principal de ${ title }` } />
            <div className="cardPortfolio__text">
                <h3 className="cardPortfolio__text__title"> { title } </h3>
                <p className="cardPortfolio__text__desc"> { descriptionShort }</p>

                <Link className="cardPortfolio__text__link" to={`/portfolio/${ title }`} >
                Ver el Proyecto
                </Link>
                <div className="cardPortfolio__text__tec">
                    {
                        tec.map(( tec, i ) => (
                            <div key={i} className="cardPortfolio__text__tec__img">
                                <TecPortfolio tec={tec} />
                            </div>
                        ))
                    }
                </div>
                

            </div>

        </div>
    )
}
