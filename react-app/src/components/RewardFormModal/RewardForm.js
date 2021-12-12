import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { createReward } from '../../store/project';
import './RewardFormModal.css';

const RewardForm = ({project_id, setShowModal}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault()
        const rewardInfo = {
            project_id,
            title,
            price,
            description,
        }
        const data = await dispatch(createReward(rewardInfo))
        if(data){
            setErrors(data)
        } else {
        setShowModal(false);
        }
    }

    return (
        <div className='form-container'>
            <div className="errors">
                {errors.map((error, ind) => (
                <div key={ind}>{error.split(':')[1]}</div>
            ))}
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='reward-title-input'
                placeholder='Title'
                required
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='reward-description-input'
                placeholder='Description'
                required
                onChange= {(e) => setDescription(e.target.value)}/>
                <input
                className='reward-price-input'
                placeholder='Price'
                required
                onChange= {(e) => setPrice(e.target.value)}/>
                <button type='submit' className="createRewardsBtn">Submit</button>
            </form>
        </div>
    )
}

export default RewardForm;
