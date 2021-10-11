import React from 'react'
import { NavLink } from 'react-router-dom';


export const NavMenu = () => {
    return (
        <ul id="menu-hidden" className="navmenu">            
            <div id="" className="menu">
                <NavLink
                    activeClassName="menu-disabled"
                    className="menu__link"
                    exact
                    to="/"
                    >
                    Inicio
                </NavLink>

                <NavLink
                    activeClassName="menu-active"
                    className="menu__link"
                    exact
                    to="/about"
                    >
                    Sobre Mi
                </NavLink>

                <NavLink
                    activeClassName="menu-active"
                    className="menu__link"
                    exact
                    to="/portfolio"
                >
                    Portfolio
                </NavLink>

                <NavLink
                    activeClassName="menu-active"
                    className="menu__link"
                    exact
                    to="/contact"
                    >
                    Contacto
                </NavLink>                        
            </div>
        </ul>
    )
}
