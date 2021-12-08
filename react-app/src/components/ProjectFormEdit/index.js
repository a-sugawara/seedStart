import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { editProject } from '../../store/project'
import {oneProject} from  '../../store/project'

const ProjectFormEdit = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const projectInfo = {
            user_id,
            title,
            description,
            category_id,
            goal_amount,
        }
        dispatch(editProject(projectId, projectInfo))
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
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='project-title-input'
                placeholder='Title'
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='project-description-input'
                placeholder='Description'
                onChange= {(e) => setDescription(e.target.value)}/>
                <select className='category-dropdown-menu'
                onChange={(e) => setCategoryId(e.target.value)}>
                    <option value={1}>{categories[0]}</option>
                    <option value={2}>{categories[1]}</option>
                    <option value={3}>{categories[2]}</option>
                    <option value={4}>{categories[3]}</option>
                    <option value={5}>{categories[4]}</option>
                    <option value={6}>{categories[5]}</option>
                    <option value={7}>{categories[6]}</option>
                    <option value={8}>{categories[7]}</option>
                    <option value={9}>{categories[8]}</option>
                </select>
                <input
                className='project-price-input'
                placeholder='Price'
                onChange= {(e) => setGoalAmount(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ProjectFormEdit;