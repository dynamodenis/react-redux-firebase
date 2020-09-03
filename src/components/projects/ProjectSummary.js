import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'

function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <div className="grey-text">{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    )
}

export default ProjectSummary
