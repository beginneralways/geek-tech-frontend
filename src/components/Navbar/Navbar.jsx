import React from "react"   
import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar(){


    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><Link to ="/register" className="navbar__link">Register</Link></li>
                <li className="navbar__item"><Link to ="/home" className="navbar__link">View Items</Link></li>
                <li className="navbar__item"><Link to ="/login" className="navbar__link">Login</Link></li>
            </ul>
        </nav>
    )

}