import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, newBacking } from "../../store/project";
import './BackingForm.css'

const BackingForm = ({user_id, project_id}) => {
    const [backed, setBacked] = useState(0)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const validator = () => {
        let error = []
        if (backed < 1) {
            error.push('Please enter a whole number greater than 0.')
        }
        else if (typeof backed === 'string') {
            error.push('Please enter a whole number greater than 0.')
        }
        else if (backed % 1 !== 0) {
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
        // e.preventDefault();

        const backingInfo = {
            user_id,
            project_id,
            backed
        }
        const data = await dispatch(newBacking(backingInfo));
        if (data) {
            setErrors(data);
        }else{
            dispatch(oneProject(project_id));
        }
    }

    return (
        <div className='backing-form-container'>
            <div className="errors">
                {errors.map((error, ind) => (
                <div key={ind}>{error.split(':')[1]}</div>
            ))}
            </div>
            <form className='backing-form' onSubmit={preSubmit}>
                <input
                className='backed-input'
                placeholder='Amount'
                required
                onChange={(e) => setBacked(e.target.value)}/>
                <button type='submit' className="backBtn">Back</button>
            </form>
        </div>
    )
}

export default BackingForm
