import React from 'react'
import {NavLink} from 'react-router-dom'

function SignOut() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </ul>
    )
}

export default SignOut
