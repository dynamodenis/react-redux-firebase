import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import createProject from '../../store/actions/projectActions'


class CreateProject extends Component {
    state={
        title:'',
        content:""
    }

    // change the value
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    // submit form
    onSubmit= e =>{
        e.preventDefault()
        //console.log(this.state)
        this.props.createProject(this.state)
        // redirect to homepage after posting
        this.props.history.push("/")
    }
    render() {
        return (
            <div className="container">
                <h4 className="text-center mr-4">Create a New Project</h4>
                <form className="white" onSubmit={this.onSubmit}>
                    <div className="input-field ">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" name="title" className="form-control" onChange={this.onChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="content"  className="materialize-textarea" onChange={this.onChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(CreateProject)
