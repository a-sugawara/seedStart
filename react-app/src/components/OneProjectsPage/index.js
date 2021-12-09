import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink ,useHistory, useParams} from 'react-router-dom'
import {oneProject, putReward} from  '../../store/project'
import  BackingForm  from '../BackingForm/index'
import EditProjectModal from '../ProjectFormEdit/EditProjectModal'
import DeleteProjectModal from "../DeleteProjectModal/DeleteProjectModal";
import PostRewardModal from "../RewardFormModal/index";
import EditRewardModal from "../RewardEditModal";

export default function OneProjectPage(){
    let dispatch = useDispatch();
    let {currentProject: project} = useSelector(state => state.project);
    let sessionUser = useSelector(state => state.session.user);
    const user_id = useSelector(state => state.session.user?.id);
    const {projectId} = useParams();

    useEffect(() => {
        dispatch(oneProject(projectId))
    }, [dispatch])


    let projectButtons;
    let rewardCreateButtons;
    if(sessionUser){
        if(sessionUser.id === project?.user_id){
            projectButtons =
                <div className="navbtn-holder">
                    <div>
                        <EditProjectModal project_id={projectId} />
                    </div>
                    <div>
                        <DeleteProjectModal project_id={projectId}/>
                    </div>
                </div>

            rewardCreateButtons = <PostRewardModal project_id={projectId}/>
        }
    }

    let rewards = project?.rewards?.map((reward) => {
        return <div className="rewardCard">
            <div className="tier1">
                {reward[0]}
            </div>
            <div className="tier2">
                {reward[1]}
            </div>
            <div className="tier3">
                {reward[2]}
            </div>
            {console.log(reward[3])}
            {(user_id === project.user_id) ? <EditRewardModal project_id={projectId} reward_id={reward[3]}/> : null}
        </div>
    })

    let backingForm = <BackingForm project_id={+projectId} user_id={user_id}/>
    for(let i = 0; i < project?.backing.length; i++) {
        if(project.backing[i][1] === user_id) {
            backingForm = 'Already contributed to this project'
        }
    }



    return (
    <div className='single-wrapper'>
        <img className="project-card-img" src={project?.images[0]} alt="project example"/>
            <div>{project?.title}</div>
            <div>Goal: {"$"}{project?.goal_amount}</div>
            {console.log(project?.backing, '0000')}
            <div>Raised: {"$"}{project?.backing?.reduce((acc, a)=>acc+a[0],0)}</div>
            <div>User: {project?.user}</div>
        {/* {project?.goal_amount} */}
        {projectButtons}
        {backingForm}
        {rewards}
        {rewardCreateButtons}
    </div>
    )
}
