import React from 'react'

export const ImagePortfolio = ( { pictures, path } ) => {
    return (
        <div className="">
            <img className="" src={`/assets/images/portfolio/${path}/${ pictures }`} alt={ pictures }/>
        </div>
    )
}
