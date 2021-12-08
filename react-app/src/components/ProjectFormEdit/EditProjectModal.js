import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import ProjectFormEdit from './index';
import editProject from '../../store/project'


function EditProjectModal({project}){
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
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
