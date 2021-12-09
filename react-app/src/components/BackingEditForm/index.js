import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, updateBacking } from "../../store/project";

const BackingEditForm = ({user_id, project_id, backing_id, amount_backed}) => {
    let [backed, setBacked] = useState(0)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()
        let total = parseInt(backed) + amount_backed
        const backingInfo = {
            user_id,
            project_id,
            backed: total
        }
        const data = await dispatch(updateBacking(backingInfo, backing_id));
        if (data) {
            setErrors(data)
        } else{
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
                <button type='submit'>Back More</button>
            </form>
        </div>
    )
}

export default BackingEditForm