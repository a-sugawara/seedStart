import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allProjects, removeReward } from '../../store/project'

import './DeleteRewardModal.css'


const DeleteRewardConfirmation = ({reward_id, setShowModal}) => {
    // const history = useHistory()
    // const {projectId} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeReward(reward_id))
        setShowModal(false)
        // history.push('/')
    }

    return (

        <div className="deleteRewardModal">
                <div className="sidebar2"></div>
            <div className="form">
                <p>Are you sure you want to delete this reward?</p>
                <button type="submit" onClick={handleDelete} className="deleteRewardModalBtn">Delete Reward</button>
            </div>
        </div>

    )
}

export default DeleteRewardConfirmation
