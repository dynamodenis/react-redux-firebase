import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component {
    render() {
        const {projects, notifications}= this.props
        return (
            <div>
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={projects}></ProjectList>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notification notifications={notifications}></Notification>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        projects:state.firestore.ordered.project,
        notifications:state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"project",orderBy:['createdAt','desc']},
        //get the notifications collections created by cloud functions
        {collection:"notifications", limit:3, orderBy: ['time', 'desc']}
    ])
)(Dashboard)
