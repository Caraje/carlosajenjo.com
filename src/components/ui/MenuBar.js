import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu } from './NavMenu';




export const MenuBar = () => {
    const hiddenMenuButton = () => {
        const hiddenButtonMenu = document.getElementById("menu_toggle");
        const hiddenMenu = document.getElementById("menu-hidden");
        hiddenButtonMenu.classList.toggle('hidden')
        hiddenMenu.classList.toggle('menu-hidden')
    }

    const button_menu = <button className="menubar__btn" onClick={ hiddenMenuButton }>
                        <i id="menubar__btn" className=" fas fa-bars"></i>
                        </button>;
    const {innerWidth} = window; 
    const [screen, setScreen] = useState(innerWidth)
    window.addEventListener('resize', ()=>{
        setScreen(window.screen.width)
    })

    return (
        <div className="menubar">
            <div className="menubar__container">
                <Link
                    className="menubar__container__logo"
                    to="/"
                    >
                    <img className="menubar__img" src="/assets/logos/logoh.png" alt="Logo Carlosajenjo.com"/>
                </Link>

                <div>
                {screen > 832 
                        ? <NavMenu /> 
                        : button_menu
                    }
                </div>

            </div>
            <div id="menu_toggle" className="menubar__hidden-menu hidden">
                    <NavMenu />
                </div>

            
        </div >
    )
}
