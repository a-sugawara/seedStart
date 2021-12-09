import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import RewardEditForm from './RewardEditForm';



function EditRewardModal({project_id}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)}>Edit Reward</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RewardEditForm project_id={project_id} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
        </div>
    )
}

export default EditRewardModal