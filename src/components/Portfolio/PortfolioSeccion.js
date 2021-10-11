import React from 'react'
import { cardsPortfolio } from '../../data/portfolioData'
import { CardPortfolio } from './CardPortfolio'


export const PortfolioSeccion = ({limit}) => {

    // const cards = cardsPortfolio
    // console.log(typeof limit)
    
    return (
        <div>

            {
                cardsPortfolio.slice( 0, limit ).map( ( card, i ) => (
                    
                    <div key= {i}>
                        <CardPortfolio 
                            key= {i}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            descriptionShort={ card.descriptionShort }
                            img={card.imagen}
                            tec={card.tecnologies}
                            url={card.url}
                            pictures={card.pictures}
                        />

                    </div>
                    ))
                }
        </div>
    )
}
