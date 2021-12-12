import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProject } from '../../store/project'
import {oneProject} from  '../../store/project'
import './EditProjectModal.css'

const ProjectFormEdit = ({setShowModal}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategoryId] = useState(1);
    const [goal_amount, setGoalAmount] = useState('');
    const [errors, setErrors] = useState([])
    const {projectId} = useParams()

    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const validator = () => {
        let error = []
        if (+goal_amount < 50) {
            error.push('. : Goal - must be at least $50')
        }
        else if (!Boolean(+goal_amount)) {
            error.push('. : Goal - Please enter a number')
        }
        else if (+goal_amount % 1 !== 0) {
            error.push('. : Goal - Please enter a whole number')
        }

        if(title.length > 80) {
            error.push('. : Title - Please enter a title shorter than 80 characters')
        }

        if(description.length > 500) {
            error.push('. : Descriptions cannot exceed 500 characters')
        } else if(description.length < 20) {
            error.push('. : Descriptions need to be at least 20 characters')
        }
        return error;
    }

    useEffect(() => {
        dispatch(oneProject(projectId))}, [dispatch]
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        } else {
            const projectInfo = {
                user_id,
                title,
                description,
                category_id,
                goal_amount,
            }
            const data = await dispatch(editProject(projectId, projectInfo));
            if (data) {
                setErrors(data)
            } else {
            setShowModal(false)
            };
        }
    }


    const categories = ['Parks & Recreation',
                        'Local Businesses',
                        'Environment',
                        'Foods',
                        'Culture',
                        'Green Tech & Energy',
                        'Housing',
                        'Community',
                        'Other']

    return (
        <div className='form-container'>
            <div className="sidebar2"></div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="errors">
                    {errors.map((error, ind) => (
                    <div key={ind}>{error.split(':')[1]}</div>
                ))}
                </div>
                <input
                className='project-title-input input-field'
                placeholder='Title'
                required
                value={title}
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='project-description-input input-field'
                placeholder='Description'
                required
                value={description}
                onChange= {(e) => setDescription(e.target.value)}/>
                <select className='category-dropdown-menu input-field'
                onChange={(e) => setCategoryId(e.target.value)}>
                    <option className="value" value={1}>{categories[0]}</option>
                    <option className="value" value={2}>{categories[1]}</option>
                    <option className="value" value={3}>{categories[2]}</option>
                    <option className="value" value={4}>{categories[3]}</option>
                    <option className="value" value={5}>{categories[4]}</option>
                    <option className="value" value={6}>{categories[5]}</option>
                    <option className="value" value={7}>{categories[6]}</option>
                    <option className="value" value={8}>{categories[7]}</option>
                    <option className="value" value={9}>{categories[8]}</option>
                </select>
                <input
                className='project-price-input input-field'
                placeholder='Price'
                required
                value={goal_amount}
                onChange= {(e) => setGoalAmount(e.target.value)}/>
                <button className="editProjectModalBtn" type='submit'>Submit Project</button>
            </form>
        </div>
    )
}

export default ProjectFormEdit;
