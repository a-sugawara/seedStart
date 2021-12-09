import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allProjects, removeReward } from '../../store/project'


const DeleteRewardConfirmation = ({reward_id}) => {
    // const history = useHistory()
    // const {projectId} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeReward(reward_id))
        // history.push('/')
    }

    return (
        <div>
            <p>Are you sure you want to delete this reward?</p>
            <button type="submit" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteRewardConfirmation
