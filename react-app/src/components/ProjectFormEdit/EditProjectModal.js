import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import ProjectFormEdit from './index';



function EditProjectModal({
    project,
    project_id,
    image_url,
    goal_amount,
    category_id,
    description,
    title
}){

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)} className="editProjectFormBtn">Edit Project</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectFormEdit
                    aproject={project}
                    setShowModal={setShowModal}
                    aproject_id={project_id}
                    aimage_url={image_url}
                    agoal_amount={goal_amount}
                    acategory_id={category_id}
                    adescription={description}
                    atitle={title}
                    />
                </Modal>
            )}
        </>
        </div>
    )
}

export default EditProjectModal
