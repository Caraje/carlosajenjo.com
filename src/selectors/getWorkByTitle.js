import { cardsPortfolio } from "../data/portfolioData";


export const getWorkByTitle = ( title ) => {
    return cardsPortfolio.find(( work => work.title === title ))
}