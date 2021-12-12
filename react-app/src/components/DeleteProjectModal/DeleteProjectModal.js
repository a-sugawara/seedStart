import React, {useState} from 'react'
import { Modal } from '../context/Modal';
import DeleteProjectConfirmation from './DeleteConfirmation'
import './DeleteProjectModal.css'


function DeleteProjectModal({project}) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
    <>
        <div onClick={() => setShowModal(true)} className="deleteProjectFormBtn">Delete Project</div>
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
