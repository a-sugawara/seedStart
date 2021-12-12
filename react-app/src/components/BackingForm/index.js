import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, newBacking, allProjects } from "../../store/project";
import './BackingForm.css'

const BackingForm = ({user_id, project_id}) => {
    const [backed, setBacked] = useState(0)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const validator = () => {
        let error = []
        if(+backed < 1) {
            error.push(". : Please enter a number greater than 0")
        } else if(!Boolean(+backed)) {
            error.push(". : Please enter a number")
        } else if(+backed % 1 !== 0) {
            error.push(". : Please enter a whole number")
        }
        return error;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errorsArr = validator();
        
        if(errorsArr.length) {
            setErrors(errorsArr)
            return;
        } else {
            setErrors([])
            console.log('no errors')
            const backingInfo = {
                backed,
                user_id,
                project_id
            }
            const data = await dispatch(newBacking(backingInfo))
            if(data) {
                setErrors(data)
            } else {
                dispatch(oneProject(project_id))
            }
        }
    }

    return (
        <div className='backing-form-container'>
            <div className="errors">
                {errors.map((error, ind) => (
                <div key={ind}>{error.split(':')[1]}</div>
            ))}
            </div>
            <form className='backing-form' onSubmit={handleSubmit}>
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
