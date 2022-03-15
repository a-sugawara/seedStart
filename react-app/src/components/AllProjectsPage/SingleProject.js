import React from 'react'
import {useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import {postLike, deleteLike} from  '../../store/project'
import "./AllProjectsPage.css"

export default function SingleProject({projects, project, idx, sessionUser}) {
    let dispatch = useDispatch()

    const handleLike = (e, project_id) => {
        e.preventDefault()
        const information = {
            project_id,
            user_id: sessionUser.id
        }
        dispatch(postLike(information))
    }

    const handleDeleteLike = (e, project_id, user_id) => {
        e.preventDefault();
        dispatch(deleteLike(project_id, user_id))
    }
  return (
    <NavLink key={idx} to={`/projects/${project.id}`}>
        <div className="project-card">
            <div className="image-bar">
                <img className="project-card-img" alt="project-card-img" src={project.images[0]}/>
                <div className="progress-bar-all">
                    <div className="progress-status-all"
                    style={{width:`${(project?.backing?.reduce((acc, a)=>acc+a,0)) / (project?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="project-card-info" >
                <div className="title">{project.title.slice(0,30)}</div>
                <div>Goal: ${project.goal_amount}</div>
                <div>By {project.user}</div>
                <div className="like-holder"><div className="likeNum">{project.like.length}</div>
                    {sessionUser ? [projects[idx]?.like.find(lik => lik[0] === sessionUser.id) ?
                    <div onClick={(e) => handleDeleteLike(e, project.id, sessionUser.id)}><img className="unlike-heart"src="https://cdn.discordapp.com/attachments/915741036024827916/933638180572389376/SEEDHEART.png"/></div>:
                    <div onClick={(e) => handleLike(e, project.id)}><img className="like-heart"src="https://cdn.discordapp.com/attachments/915741036024827916/933638180786303036/SEEDHEARTHOLLOW.png"/></div>] : <img className="like-heart"src="https://cdn.discordapp.com/attachments/915741036024827916/933638180786303036/SEEDHEARTHOLLOW.png"/>}
                </div>
            </div>
            <div>
            </div>
        </div>
    </NavLink>
  )
}
