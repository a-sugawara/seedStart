import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory, useParams} from 'react-router-dom'
import {oneProject} from  '../../store/project'


export default function OneProjectPage(){
    let dispatch = useDispatch()
    let project = useSelector(state => state.project.currentProject)
    let sessionUser = useSelector(state => state.session.user)
    const {projectId} = useParams()

    useEffect(() => {
        dispatch(oneProject(projectId))}, [dispatch]
    )
    let projectButtons
    if(sessionUser){
        if(sessionUser.id === project?.user_id){
            projectButtons =
                <div className="navbtn-holder">
                    <div>
                        edit
                    </div>
                    <div>
                        delete
                    </div>
                </div>
        }
    }

    return <div className='single-wrapper'>
        <img className="project-card-img" src={project?.images[0]}/>
            <div>{project?.title}</div>
            <div>Goal: ${project?.goal_amount}</div>
            <div>Raised: ${project?.backing.reduce((acc, a)=>acc+a,0)}</div>
            <div>User: {project?.user}</div>
        {/* {project?.goal_amount} */}
        {projectButtons}
    </div>
}
