import React, {Fragment} from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

function ProjectList({projects}) {
    return (
        <Fragment>
            <div className="project-list section">
                {projects && projects.map(project =>{
                    return(
                        <Link to={'/project/' + project.id}>
                            <ProjectSummary project={project} key={project.id}/>
                        </Link>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default ProjectList
