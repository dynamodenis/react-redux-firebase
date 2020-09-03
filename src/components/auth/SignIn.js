import React, { Component } from 'react'
import {Link,Redirect} from "react-router-dom"
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'


class SignIn extends Component {
    state={
        email:'',
        password:""
    }

    // change the value
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    // submit form
    onSubmit= e =>{
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        const { authError,auth } = this.props
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <h4 className="text-center mr-4">Welcome Back</h4>
                <form className="white" onSubmit={this.onSubmit}>
                    <div className="input-field ">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.onChange} value={this.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.onChange} value={this.password} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                        { authError ? <p>{authError} </p>: null}
                        </div>
                    </div>
                    <p className="text-muted text-small">Don't  have an account? <Link to="/register">Register</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn:(credentials)=>dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
