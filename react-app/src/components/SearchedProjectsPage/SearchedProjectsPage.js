import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink, useParams} from 'react-router-dom'
import {searchProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import './SearchedProjectsPage.css'

export default function SearchedProjectsPage(){
    const {term} = useParams()
    let dispatch = useDispatch()
    let {searchedProjects:projects} = useSelector(state => state.project)
    const details = projects?.map((project,idx) =>
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
            {/* <div>Raised: ${project.backing.reduce((acc, a)=>acc+a,0)}</div> */}
            <div>By {project.user}</div>
        </div>
        <div>

        </div>
    </div>
</NavLink>
    )
    useEffect(()=>{
        dispatch(searchProjects(term))},
        [dispatch]
    )



    return <>
        <div className="project-wrapper">
        {details}
        </div>
        <Footer/>
        </>
}
