import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import RewardForm from './RewardForm';
// import createReward from '../../store/project'


function PostRewardModal({project_id}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)}>Create Reward</button>
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
