import React from 'react'
import{useParams} from 'react-router-dom'
import {useSelector} from 'react-redux';
import EditRewardModal from "../RewardEditModal";
import DeleteRewardModal from "../DeleteRewardModal";


export default function Reward({reward}) {

    const {projectId} = useParams();
    let {currentProject: project} = useSelector(state => state.project);
    const user_id = useSelector(state => state.session.user?.id);

    let test=null
    for(let i = 0; i < project?.backing.length; i++) {
        if(project.backing[i][1] === user_id) {
            if(project.backing[i][0] >= reward[2]){
                test="Owned"
            }
        }

    }
    return <div className="rewardCard">
        <div className="reward-title">
            {reward[0]}
        </div>
        <div className="reward-info">
            <div className="reward-description">
                {reward[1]}
            </div>
            <div className="reward-price">
            {` Cost: $${reward[2]}`}
            </div>
        </div>
        <div className="reward-buttons">

            {(user_id === project.user_id) ? <EditRewardModal
                project_id={projectId}
                reward_id={reward[3]}
                title={reward[0]}
                description={reward[1]}
                price={reward[2]}
                /> : null}
            {(user_id === project.user_id) ? <DeleteRewardModal project_id={projectId} reward_id={reward[3]}/> : null}
        </div>
        {test}
    </div>
}
