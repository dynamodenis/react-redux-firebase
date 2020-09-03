import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

function SignIn(props) {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Post</NavLink>
            </li>
            <li>
                <a onClick={props.sighOut}>Sign Out</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sighOut:() =>dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignIn)
