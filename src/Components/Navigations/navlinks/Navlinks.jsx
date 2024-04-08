import React from 'react'
import { NavLink } from "react-router-dom"

const Navlinks = ({to, children, icon}) => {
    return(
        <NavLink className="navlink active"to = {to}>
            <div>
                <span>{icon}</span>
                <span> {children}</span>
            </div>
        </NavLink>
    )
}

export default Navlinks