import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import RewardForm from './RewardForm';
import '../OneProjectsPage/OneProjectsPage.css'
import './RewardFormModal.css';

function PostRewardModal({project_id}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="createRewardBtnContainer">
        <>
            <div onClick={() => setShowModal(true)} className="createRewardsBtn-plus">{"+"}</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RewardForm project_id={project_id} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
        </div>
    )
}

export default PostRewardModal
