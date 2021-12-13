import { useState } from "react";
import { useDispatch } from "react-redux";
import { oneProject, updateBacking } from "../../store/project";
import '../../components/BackingForm/BackingForm.css'

const BackingEditForm = ({user_id, project_id, backing_id, amount_backed}) => {
    let [backed, setBacked] = useState(0)
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
            const total = parseInt(backed) + amount_backed
            const backingInfo = {
                backed: total,
                user_id,
                project_id
            }
            const data = await dispatch(updateBacking(backingInfo, backing_id))
            if(data) {
                setErrors(data)
            } else {
                dispatch(oneProject(project_id))
            }
        }
    }

    return (
        <div className='backing-form-container'>
            <form className='backing-form' onSubmit={handleSubmit}>
            <div className="errors">
            {errors.length ?  errors.map((error, ind) => (
                <div key={ind}>{error.split(':')[1]}</div>
            )):null}
        </div>
                <input
                className='backed-input'
                placeholder='Amount'
                required
                value={backed}
                onChange={(e) => setBacked(e.target.value)}/>
                <button type='submit' className="backMoreBtn">Back More</button>
            </form>
        </div>
    )
}

export default BackingEditForm
