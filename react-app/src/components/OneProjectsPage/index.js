import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{useParams} from 'react-router-dom'
import {oneProject} from  '../../store/project'
import  BackingForm  from '../BackingForm/index'
import BackingEditForm from "../BackingEditForm";
import EditProjectModal from '../ProjectFormEdit/EditProjectModal'
import DeleteProjectModal from "../DeleteProjectModal/DeleteProjectModal";
import PostRewardModal from "../RewardFormModal/index";
import Footer from "../Footer/Footer";
import Reward from "./reward";
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
    let backingForm = <BackingForm project_id={+projectId} user_id={user_id}/>
    for(let i = 0; i < project?.backing.length; i++) {
        if(project.backing[i][1] === user_id) {
            backingForm = (
                <div className="backing-form-container">
                    <div className="amount-contributed">{`You've supported $${project.backing[i][0]}!✨`}</div>
                    {<BackingEditForm project_id={+projectId} user_id={user_id} backing_id={project.backing[i][2]} amount_backed={+project.backing[i][0]}/>}
                </div>
            )
        }
    }
    if(sessionUser){
        if(sessionUser.id === project?.user_id){
            projectButtons =
                <div className="navbtn-holder">
                    <div>
                        <EditProjectModal
                            project_id={projectId}
                            image_url={project?.images[0]}
                            goal_amount={project?.goal_amount}
                            category_id={project?.category_id}
                            description={project?.description}
                            title={project?.title}

                        />
                    </div>
                    <div>
                        <DeleteProjectModal project_id={projectId}/>
                    </div>
                </div>
            rewardCreateButtons = <PostRewardModal project_id={projectId}/>
            backingForm = null
        }
    }else{
        backingForm =null
    }

    let rewards = project?.rewards?.sort((a,b) => a[2]-b[2]).map((reward) => <Reward reward={reward}/>)
    let rewardsbox
    if(rewards?.length){
        rewardsbox = <div className="rewardsContainer">
        {rewards}
        {rewardCreateButtons}
        </div>
    }else{
        rewardsbox = (backingForm ,rewardCreateButtons)
    }


    return (
    <div>
        <div className='singleProject-title'>{project?.title}</div>
        <div className='singleProject-wrapper'>
            <div className="singleProject-name-info">
                <img className="singleProject-card-img" src={project?.images[0]} alt="project example"/>
                    <div>Goal: {"$"}{project?.goal_amount}</div>
                    <div>Raised: {"$"}{project?.backing?.reduce((acc, a)=>acc+a[0],0)}</div>
                    <div>User: {project?.user}</div>
                {projectButtons}
                <div className="progress-bar">
                    <div className="progress-status"
                    style={{width:`${(project?.backing?.reduce((acc, a)=>acc+a[0],0)) / (project?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="singleProject-description">
                <div className="singleProject-description-header">Description</div>
                {project?.description}
            </div>
            <div className="backing-rewards">
            {backingForm}
            {rewardsbox}
            </div>
        </div>
        <Footer/>
    </div>
    )
}
