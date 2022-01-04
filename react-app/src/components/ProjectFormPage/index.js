import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'
import { createProject } from '../../store/project'
import './ProjectFormPage.css'

const ProjectForm = () => {
    const history = useHistory()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategoryId] = useState(1);
    const [goal_amount, setGoalAmount] = useState('');
    const [image_url, setImageUrl] = useState('');
    const [errors, setErrors] = useState([])

    const user_id = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const validator = () => {
        let error = []
        if (+goal_amount < 50) {
            error.push('. : Please enter a whole number greater than 50 for your goal.')
        }
        else if (!Boolean(+goal_amount)) {
            error.push('. : Please enter a number for your goal.')
        }
        else if (+goal_amount % 1 !== 0) {
            error.push('. : Please enter a whole number for your goal.')
        }

        if(title.length < 5) {
            error.push('. : Please enter a title of at least 5.')
        }
        if(title.length > 80) {
            error.push('. : Please enter a title shorter than 80 characters.')
        }

        if(description.length > 2000) {
            error.push('. : Descriptions cannot exceed 2000 characters.')
        } else if(description.length < 20) {
            error.push('. : Descriptions need to be at least 20 characters.')
        }

        if(!image_url){
            error.push('. : Must Upload an image.')
        }

        return error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        } else{
            const formData = new FormData()

                formData.append("user_id",user_id)
                formData.append("title",title)
                formData.append("description",description)
                formData.append("category_id",category_id)
                formData.append("goal_amount",goal_amount)
                formData.append("image_url", image_url)

            const data = await dispatch(createProject(formData))
            if(data) {
                setErrors(data)
            } else {
                history.push('/projects')
            }
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
        <>
            <div className="page-header">
                New Project
            </div>
            <div className='project-form-container'>
                <div className="errors">
                    {errors.map((error, ind) => (
                    <div key={ind}>{error.split(':')[1]}</div>
                ))}
                </div>
                <form className='project-form' onSubmit={handleSubmit}>
                    <input
                    className='project-title-input'
                    placeholder='Title'

                    value = {title}
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

                    value = {goal_amount}
                    onChange= {(e) => setGoalAmount(e.target.value)}/>
                    <label htmlFor='aws' className='awsholder'>
                        <img src="https://cdn.discordapp.com/attachments/915741036024827916/927861102568697906/leavesCam.png"
                        className='project-img-upload'/>
                    </label>
                    <input
                    id="aws"
                    type="file"
                    accept=".jpeg, .jpg, .png, .gif"
                    className='project-image_url-input'
                    placeholder='Image URL'

                    // value = {image_url}
                    onChange= {(e) => setImageUrl(e.target.files[0])}/>
                    <div>{image_url.name?`Uploading ${image_url.name}`:null }</div>
                    <button className="project-submit-button">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ProjectForm;
