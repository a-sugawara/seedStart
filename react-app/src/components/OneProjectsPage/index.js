import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory, useParams} from 'react-router-dom'
import {oneProject} from  '../../store/project'
import  BackingForm  from '../BackingForm/index'


export default function OneProjectPage(){
    let dispatch = useDispatch()
    let project = useSelector(state => state.project.currentProject)
    let sessionUser = useSelector(state => state.session.user)
    const user_id = useSelector(state => state.session.user.id);
    const {projectId} = useParams()

    useEffect(() => {
        dispatch(oneProject(projectId))}, [dispatch]
    )

    let backingForm
    
    for(let i = 0; i < project?.backing.length; i++) {
        if(project.backing[i][1] === user_id) {
            backingForm = 'Already contributed to this project'
        } else {
            backingForm = <BackingForm project_id={+projectId} user_id={user_id}/>
        }
    }

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


    return (
    <div className='single-wrapper'>
        <img className="project-card-img" src={project?.images[0]}/>
            <div>{project?.title}</div>
            <div>Goal: {"$"}{project?.goal_amount}</div>
            //ask leah how to fix this dynamically
            <div>Raised: {"$"}{project?.backing?.reduce((acc, a)=>acc+a[0],0)}</div>
            <div>User: {project?.user}</div>
        {/* {project?.goal_amount} */}
        {projectButtons}
        {backingForm}
    </div>
    )
}   
