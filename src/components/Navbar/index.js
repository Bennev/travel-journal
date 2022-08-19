import "./style.css"

import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src="../images/world.png" />
            <h4 className="nav--title">My Travel Journal</h4>
        </nav>
    )
}