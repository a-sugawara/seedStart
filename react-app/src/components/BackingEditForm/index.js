import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, updateBacking } from "../../store/project";

const BackingEditForm = ({user_id, project_id, backing_id, amount_backed}) => {
    let [backed, setBacked] = useState(0)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const validator = () => {
        console.log( "XXXXXXXXXX", backed, 123)
        let error = []
        if (+backed < 1) {
            error.push('Please enter a whole number greater than 0.')
        }
        else if (typeof +backed === 'string') {
            error.push('Please enter a whole number greater than 0.')
        }
        else if (+backed % 1 !== 0) {
            error.push('Please enter a whole number greater than 0.')
        }
        return error;
    }

    const preSubmit = (e) => {
        e.preventDefault();
        let error = validator()
        setErrors(error);

        if (errors.length > 0) {
            return;
        } else {
            handleSubmit();
        }
    }

    const handleSubmit = async (/*e*/) => {
        // e.preventDefault()
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
            <form className='backing-form' onSubmit={preSubmit}>
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
