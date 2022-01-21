import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink , useParams} from 'react-router-dom'
import {allProjects, postLike, deleteLike} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./CategoryResults.css"


export default function CategoryResults(){
    const {catId} = useParams()
    let dispatch = useDispatch()
    let usprojects = useSelector(state => state.project.projects)
    let projects=usprojects.filter(project =>project.category_id === +catId)
    let sessionUser = useSelector(state => state.session.user)

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

    const details = projects?.map((project,idx) =>
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
                {/* <div>Raised: ${project.backing.reduce((acc, a)=>acc+a,0)}</div> */}
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

    useEffect(()=>{
        dispatch(allProjects())},
        [dispatch]
    )
    const categories = ['Parks & Recreation',
    'Local Businesses',
    'Environment',
    'Foods',
    'Culture',
    'Green Tech & Energy',
    'Housing',
    'Community',
    'Other',
    'All']

    return <div>
        <div className='page-header'>{`${categories[catId-1]}`}</div>
        <div className="category-project-wrapper">
            {details}
        </div>
            <Footer/>
        </div>
}
