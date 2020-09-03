import React from 'react'
import {Route,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({component:Component, auth, ...rest}) =>(
    <Route
    {...rest}
    render={props=>{
        if(!auth.uid){
            return <Redirect to="/login"></Redirect>
        } else{
            return <Component {...props}/>
        }
    }}
    />
)
    
const mapStateToProps = state =>({
    auth:state.firebase.auth
})


export default connect(mapStateToProps)(PrivateRoute)