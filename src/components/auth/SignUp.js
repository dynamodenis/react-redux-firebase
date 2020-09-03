import React, { Component } from 'react'
import {Link,Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux'


class SignUp extends Component {
    state={
        email:'',
        password:"",
        firstName:"",
        lastName:""
    }

    // change the value
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    // submit form
    onSubmit= e =>{
        e.preventDefault()
        this.props.signUp(this.state)
    }
    render() {
        const { authError,auth } = this.props
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <h4 className="text-center mr-4">Register</h4>
                <form className="white" onSubmit={this.onSubmit}>
                <div className="input-field ">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" className="form-control" onChange={this.onChange} value={this.firstName}/>
                    </div>
                    <div className="input-field ">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" className="form-control" onChange={this.onChange} value={this.lastName}/>
                    </div>
                    <div className="input-field ">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" onChange={this.onChange} value={this.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.onChange} value={this.password} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Register</button>
                        <div className="red-text center">
                        { authError ? <p>{authError} </p>: null}
                        </div>
                    </div>
                    <p className="text-muted text-small">Already have an account? <Link to="/login">Login</Link></p>
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



const mapDispatchToProps= (dispatch)=>{
    return{
        signUp:(newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
