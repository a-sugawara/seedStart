// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allProjects, removeProject } from '../../store/project'

import './DeleteProjectModal.css'


const DeleteProjectConfirmation = () => {
    const history = useHistory()
    const {projectId} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeProject(projectId))
        dispatch(allProjects())
        history.push('/projects')
    }

    return (

        <div className="deleteRewardModal">
            <div className="sidebar2"></div>
        <div className="form">
            <p>Are you sure you want to delete this project?</p>
            <button type="submit" onClick={handleDelete} className="deleteModalBtn">Delete</button>
        </div>
        </div>
    )
}

export default DeleteProjectConfirmation
