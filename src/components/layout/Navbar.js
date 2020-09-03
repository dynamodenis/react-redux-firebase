import React from 'react'
import {Link} from 'react-router-dom'
import SignIn from './SignInLinks'
import SignOut from './SignOutLinks'
import { connect } from 'react-redux'

function Navbar(props) {
    const {auth,profile} = props

    const links = auth.uid ? <SignIn profile={profile}/> : <SignOut/>;
    return (
        <div>
            <nav className="nav-wrapper gray darken-3">
                <div className="container">
                    <Link to ="/" className="brand-logo">HotPost</Link>
                    {links}
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        auth: state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
