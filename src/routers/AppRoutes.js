import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";
import { AboutScreen } from '../components/about/AboutScreen'
import { ContactScreen } from '../components/contact/ContactScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { PortfolioProyect } from '../components/Portfolio/PortfolioProyect';
import { PortfolioScreen } from '../components/Portfolio/PortfolioScreen'



export const AppRoutes = () => {
    return (
        <Router>
            <div >
                <Switch>
                    <Route 
                        exact 
                        path="/about"
                        component={AboutScreen}
                        >
                    </Route>

                    <Route 
                        exact 
                        path="/contact"
                        component={ContactScreen}
                        >
                    </Route>

                    <Route 
                        exact 
                        path="/portfolio"
                        component={PortfolioScreen}
                        >
                    </Route>

                    <Route 
                        exact 
                        path="/portfolio/:workName"
                        component={PortfolioProyect}
                        >
                    </Route>

                    <Route 
                        exact
                        path="/"
                        component={HomeScreen}
                        >
                    </Route>


                    <Redirect to="/" />


                </Switch>
            </div>
        </Router>
            
    )
}
