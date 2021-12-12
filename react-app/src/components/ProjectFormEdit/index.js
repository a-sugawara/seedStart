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
    const [goal_amount, setGoalAmount] = useState(0);
    const [errors, setErrors] = useState([])
    const {projectId} = useParams()

    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(oneProject(projectId))}, [dispatch]
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
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
            <div className="errors">
                {errors.map((error, ind) => (
                <div key={ind}>{error.split(':')[1]}</div>
            ))}
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='project-title-input'
                placeholder='Title'
                required
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='project-description-input'
                placeholder='Description'
                required
                onChange= {(e) => setDescription(e.target.value)}/>
                <select className='category-dropdown-menu'
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
                className='project-price-input'
                placeholder='Price'
                required
                onChange= {(e) => setGoalAmount(e.target.value)}/>
                <button className="editProjectBtn" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ProjectFormEdit;
