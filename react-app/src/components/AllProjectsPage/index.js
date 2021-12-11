import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./AllProjectsPage.css"


export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let projects = useSelector(state => state.project.projects)
    const details = projects?.map((project, idx) =>
    <NavLink key={idx} to={`/projects/${project.id}`}>
        <div className="project-card">
            <div className="image-bar">
                <img className="project-card-img" src={project.images[0]}/>
                <div className="progress-bar-all">
                    <div className="progress-status-all"
                    style={{width:`${(project?.backing?.reduce((acc, a)=>acc+a,0)) / (project?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="project-card-info" >
                <div className="title">{project.title}</div>
                <div>Goal: ${project.goal_amount}</div>
                <div>By {project.user}</div>
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

    return <div className="project-wrapper">
        {details}
        <Footer/>
        </div>
}
