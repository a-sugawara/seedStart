import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject, oneProject } from '../../store/project'
import { newBooking } from "../../store/project";

const BackingForm = ({user_id, project_id}) => {
    const [backed, setBacked] = useState(0)
    const dispatch = useDispatch();
    console.log(user_id, project_id, 'bingbongg')

    const handleSubmit = (e) => {
        e.preventDefault()
        const backingInfo = {
            user_id,
            project_id,
            backed
        }
        dispatch(newBooking(backingInfo))
        dispatch(oneProject(project_id))
    }

    return (
        <div className='backing-form-container'>
            <form className='backing-form' onSubmit={handleSubmit}>
                <input
                className='backed-input'
                placeholder='Amount'
                onChange={(e) => setBacked(e.target.value)}/>
                <button type='submit'>Back</button>
            </form>
        </div>
    )
}

export default BackingForm
