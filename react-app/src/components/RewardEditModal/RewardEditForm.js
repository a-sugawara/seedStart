import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { putReward} from '../../store/project'
import './RewardEditModal.css'

const RewardEditForm = ({project_id, reward_id,atitle,adescription, aprice, setShowModal}) => {
    const [title, setTitle] = useState(atitle);
    const [description, setDescription] = useState(adescription);
    const [price, setPrice] = useState(aprice);
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const validator = () => {
        let error = []
        if (+price < 1) {
            error.push('. : Reward Price - must be at least $1')
        }
        else if (!Boolean(+price)) {
            error.push('. : Reward Price - Please enter a number')
        }
        else if (+price % 1 !== 0) {
            error.push('. : Reward Price - Please enter a whole number')
        }

        if(title.length > 80) {
            error.push('. : Title - Please enter a title shorter than 80 characters')
        }

        if(description.length > 500) {
            error.push('. : Descriptions cannot exceed 500 characters')
        } else if(description.length < 20) {
            error.push('. : Descriptions need to be at least 20 characters')
        }
        return error;
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        }else{
            const rewardInfo = {
                project_id,
                title,
                price,
                description
            }
            const data = await dispatch(putReward(rewardInfo, reward_id ))
            if (data){
                setErrors(data)
            } else {
                setShowModal(false);
            }

        }

    }

    return (
        <div className='form-container'>
            {console.log(atitle, adescription,aprice)}
            <div className="sidebar"></div>
            <form className='form' onSubmit={handleSubmit}>
                <div className="errors">
                    {errors.map((error, ind) => (
                    <div key={ind}>{error.split(':')[1]}</div>
                ))}
                </div>
                <input
                className='reward-title-input'
                placeholder='Title'
                required
                value={title}
                onChange= {(e) => setTitle(e.target.value)}/>
                <input
                className='reward-description-input'
                placeholder='Description'
                required
                value={description}
                onChange= {(e) => setDescription(e.target.value)}/>
                <input
                className='reward-price-input'
                placeholder='Price'
                required
                value={price}
                onChange= {(e) => setPrice(e.target.value)}/>
                <button type='submit' className="editRewardModalBtn">Submit Reward</button>
            </form>
        </div>
    )
}

export default RewardEditForm;
