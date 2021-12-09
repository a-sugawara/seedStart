import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, newBacking } from "../../store/project";

const BackingForm = ({user_id, project_id}) => {
    const [backed, setBacked] = useState(0)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const backingInfo = {
            user_id,
            project_id,
            backed
        }
        const data = await dispatch(newBacking(backingInfo));
        if (data) {
            setErrors(data)
        }else{
            dispatch(oneProject(project_id))
        }
    }

    return (
        <div className='backing-form-container'>
            <div>
            {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            </div>
            <form className='backing-form' onSubmit={handleSubmit}>
                <input
                className='backed-input'
                placeholder='Amount'
                required
                onChange={(e) => setBacked(e.target.value)}/>
                <button type='submit'>Back</button>
            </form>
        </div>
    )
}

export default BackingForm
