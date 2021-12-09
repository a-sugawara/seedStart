import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { Modal } from '../context/Modal';
import DeleteRewardConfirmation from './DeleteRewardConfirmation'


function DeleteRewardModal({project_id, reward_id}) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
    <>
        <button onClick={() => setShowModal(true)}>Delete</button>
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