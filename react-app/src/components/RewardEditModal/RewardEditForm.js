import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { putReward} from '../../store/project'

const RewardEditForm = ({project_id, reward_id}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const rewardInfo = {
            project_id,
            title,
            price,
            description
        }
        dispatch(putReward(rewardInfo, reward_id ))
    }

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='reward-title-input'
                placeholder='Title'
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='reward-description-input'
                placeholder='Description'
                onChange= {(e) => setDescription(e.target.value)}/>
                <input
                className='reward-price-input'
                placeholder='Price'
                onChange= {(e) => setPrice(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RewardEditForm;
