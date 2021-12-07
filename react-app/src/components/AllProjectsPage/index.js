import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory} from 'react-router-dom'
import {allProjects} from  '../../store/project'


export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let total = 0
    let projects = useSelector(state => state.project.projects)
    const details = projects?.map(project =>
    <>
    <img src={project.images[0]}/>
    <div>{project.title}</div>
    <div>Goal: ${project.goal_amount}</div>
    <div>Raised: ${project.backing.reduce((acc, a)=>acc+a,0)}</div>
    <div>User: {project.user}</div>
    </>
    )
    useEffect(()=>{
        dispatch(allProjects())},
        [dispatch]
    )


    console.log("00000000000000000000",projects)

    return <div>
        {details}
        </div>
}
