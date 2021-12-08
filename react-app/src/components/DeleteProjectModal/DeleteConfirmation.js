import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allProjects, removeProject } from '../../store/project'


const DeleteConfirmation = () => {
    const history = useHistory()
    const {projectId} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeProject(projectId))
        dispatch(allProjects())
        history.push('/')
    }

    return (
        <div>
            <p>Are you sure you want to delete this project?</p>
            <button type="submit" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteConfirmation
