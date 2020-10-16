import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
export default function navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo-navbar" className="logo" width="125px"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" className="navbarNav">Home</Link></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">SignIn</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
