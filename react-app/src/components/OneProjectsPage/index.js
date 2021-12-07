import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory, useParams} from 'react-router-dom'
import {oneProject} from  '../../store/project'


export default function OneProjectPage(){
    let dispatch = useDispatch()
    let project = useSelector(state => state.project.currentProject)
    const {projectId} = useParams()

    useEffect(() => {
        dispatch(oneProject(projectId))}, [dispatch]
    )

    return <div>
        {project?.title}
        {/* {project?.goal_amount} */}
    </div>
}
