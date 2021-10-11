import React from 'react'

export const TecPortfolio = ( {tec} ) => {
    // console.log(tec)
    return (
        <div className="tecnologies-group">
            <img className="tecnologies-group__img" src={`/assets/images/tecnologies/${tec}.png`} alt={tec}/>
        </div>
    )
}
