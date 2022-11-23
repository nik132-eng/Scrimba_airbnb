import React from "react"
import logo from "../Images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="description of image"/>
        </nav>
    )
}