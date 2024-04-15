import React from "react"   
import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar(){


    return(
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item"><Link to ="/User" className="navbar__link">User</Link></li>
                <li className="navbar__item"><Link to ="/home" className="navbar__link">View Items</Link></li>
                <li className="navbar__item"><Link to ="/about" className="navbar__link">About</Link></li>
                <li className="navbar__item"><Link to ="/services" className="navbar__link">Services</Link></li>
                <li className="navbar__item"><Link to ="/login" className="navbar__link">Login</Link></li>
            </ul>
        </nav>
    )

}