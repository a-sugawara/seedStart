import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{useParams} from 'react-router-dom'
import {oneProject} from  '../../store/project'
import  BackingForm  from '../BackingForm/index'
import BackingEditForm from "../BackingEditForm";
import EditProjectModal from '../ProjectFormEdit/EditProjectModal'
import DeleteProjectModal from "../DeleteProjectModal/DeleteProjectModal";
import PostRewardModal from "../RewardFormModal/index";
import EditRewardModal from "../RewardEditModal";
import DeleteRewardModal from "../DeleteRewardModal";
import './OneProjectsPage.css'

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

    let rewards = project?.rewards?.sort((a,b) => a[2]-b[2]).map((reward) => {
        let test
        for(let i = 0; i < project?.backing.length; i++) {
            if(project.backing[i][1] === user_id) {
                if(project.backing[i][0] >= reward[2]){
                    test="got"
                }
            }

        }
        return <div className="rewardCard">
            <div className="reward-title">
                {/* this is the reward title */}
                {reward[0]}
            </div>
            <div className="reward-description">
                {/* this is the reward description */}
                {reward[1]}
            </div>
            <div className="reward-price">
                {/* this is the reward price */}
                {reward[2]}
            </div>
            {(user_id === project.user_id) ? <EditRewardModal project_id={projectId} reward_id={reward[3]}/> : null}
            {(user_id === project.user_id) ? <DeleteRewardModal project_id={projectId} reward_id={reward[3]}/> : null}
            {test}
        </div>
    })

    let backingForm = <BackingForm project_id={+projectId} user_id={user_id}/>
    for(let i = 0; i < project?.backing.length; i++) {
        if(project.backing[i][1] === user_id) {
            backingForm = (
                <>
                <p>{`You've contributed $${project.backing[i][0]}`}</p>
                {<BackingEditForm project_id={+projectId} user_id={user_id} backing_id={project.backing[i][2]} amount_backed={+project.backing[i][0]}/>}
                </>
            )
        }
    }

    return (
    <>
        <div className='singleProject-title'>{project?.title}</div>
        <div className='singleProject-wrapper'>
            <div className="singleProject-name-info">
                <img className="project-card-img" src={project?.images[0]} alt="project example"/>
                    <div>Goal: {"$"}{project?.goal_amount}</div>
                    <div>Raised: {"$"}{project?.backing?.reduce((acc, a)=>acc+a[0],0)}</div>
                    <div>User: {project?.user}</div>
                {/* {project?.goal_amount} */}
                {projectButtons}
                <div className="progress-bar">
                    <div className="progress-status"
                    style={{width:`${(project?.backing?.reduce((acc, a)=>acc+a[0],0)) / (project?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="singleProject-description">
                {project?.description}
            </div>
            <div className="rewardsContainer">
            {backingForm}
            {rewards}
            {rewardCreateButtons}
            </div>
        </div>
    </>
    )
}
