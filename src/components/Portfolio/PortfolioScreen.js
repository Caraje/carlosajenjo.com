import React from 'react'
import { MenuBar } from '../ui/MenuBar'
import { PortfolioSeccion } from './PortfolioSeccion'


export const PortfolioScreen = () => {
  return (
        <div>
            <MenuBar />
            <div className="portfolio__container">
            <div>
            <h2 className="portolio__container_title">Portfolio</h2>

              <PortfolioSeccion limit={10}/>
            </div>
            </div>
        </div>
  )
}
