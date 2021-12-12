import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import ProjectFormEdit from './index';



function EditProjectModal({project}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)} className="editProjectFormBtn">Edit Project</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectFormEdit project={project} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
        </div>
    )
}

export default EditProjectModal
