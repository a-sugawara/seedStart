import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory, useParams} from 'react-router-dom'
import {allProjects} from  '../../store/project'
import "./CategoryResults.css"


export default function CategoryResults(){
    const {catId} = useParams()
    let dispatch = useDispatch()
    let usprojects = useSelector(state => state.project.projects)
    let projects=usprojects.filter(project =>project.category_id === +catId)
    const details = projects?.map(project =>
    <NavLink to={`/projects/${project.id}`}>
        <div className="project-card">
            <img className="project-card-img" src={project.images[0]}/>
            <div>{project.title}</div>
            <div>Goal: ${project.goal_amount}</div>
            <div>Raised: ${project.backing.reduce((acc, a)=>acc+a,0)}</div>
            <div>User: {project.user}</div>
        </div>
    </NavLink>
    )
    useEffect(()=>{
        dispatch(allProjects())},
        [dispatch]
    )


    return <div className="project-wrapper">
        {details}
        </div>
}
