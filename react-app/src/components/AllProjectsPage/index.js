import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects, postLike} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./AllProjectsPage.css"


export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let projects = useSelector(state => state.project.projects)
    let sessionUser = useSelector(state => state.session.user)

    const handleLike = (e, project_id) => {
        e.preventDefault()
        const information = {
            project_id,
            user_id: sessionUser.id
        }
        dispatch(postLike(information))
    }

    const details = projects?.map((project, idx) =>
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
                <div className="title">{project.title}</div>
                <div>Goal: ${project.goal_amount}</div>
                <div>By {project.user}</div>
                {sessionUser ? <button onClick={(e) => handleLike(e, project.id)}>Like</button> : null }
            </div>
            <div>
            </div>
        </div>
    </NavLink>
    ).reverse()

    useEffect(()=>{
        dispatch(allProjects())},
        [dispatch]
    )

    return <div>
    <div className='page-header'>All Projects</div>
    <div className="projects-wrapper">
        {details}
    </div>
        <Footer/>
    </div>
}
