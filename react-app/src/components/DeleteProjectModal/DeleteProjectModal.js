import React, {useState} from 'react'
import { Modal } from '../context/Modal';
import DeleteProjectConfirmation from './DeleteConfirmation'


function DeleteProjectModal({project}) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
    <>
        <button onClick={() => setShowModal(true)}>Delete</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteProjectConfirmation project={project} setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
    </div>
  );
}

export default DeleteProjectModal;
