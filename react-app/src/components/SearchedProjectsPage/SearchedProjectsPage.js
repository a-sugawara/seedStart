import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink, useParams} from 'react-router-dom'
import {searchProjects} from  '../../store/project'
import './SearchedProjectsPage.css'

export default function SearchedProjectsPage(){
    const {term} = useParams()
    let dispatch = useDispatch()
    let projects = useSelector(state => state.project.searchedProjects)
    const details = projects?.map((project,idx) =>
        <NavLink key={idx} to={`/projects/${project.id}`}>
        <div className="project-card">
            <img className="project-card-img" src={project.images[0]}/>
            <div className="project-card-info" >
                <div>{project.title}</div>
                <div>Goal: ${project.goal_amount}</div>
                <div>Raised: ${project.backing.reduce((acc, a)=>acc+a,0)}</div>
                <div>User: {project.user}</div>
            </div>
        </div>
    </NavLink>
    )
    useEffect(()=>{
        dispatch(searchProjects(term))},
        [dispatch]
    )



    return <div className="project-wrapper">
        {details}
        </div>
}
