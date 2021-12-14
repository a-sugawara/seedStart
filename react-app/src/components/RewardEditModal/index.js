import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import RewardEditForm from './RewardEditForm';
import '../OneProjectsPage/OneProjectsPage.css'


function EditRewardModal({project_id , reward_id,title,description,price}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)} className="editRewardBtn">Edit Reward</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <RewardEditForm
                        project_id={project_id}
                        reward_id={reward_id}
                        setShowModal={setShowModal}
                        atitle={title}
                        adescription={description}
                        aprice={price}
                    />
                </Modal>
            )}
        </>
        </div>
    )
}

export default EditRewardModal
