import React, {useState} from 'react'
// import {useDispatch} from 'react-redux';
import { Modal } from '../context/Modal';
import DeleteRewardConfirmation from './DeleteRewardConfirmation'
import './DeleteRewardModal.css'

function DeleteRewardModal({project_id, reward_id}) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
    <>
        <div onClick={() => setShowModal(true)} className="deleteRewardFormBtn" >Delete</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteRewardConfirmation project_id={project_id}  reward_id={reward_id} setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
    </div>
  );
}

export default DeleteRewardModal;
