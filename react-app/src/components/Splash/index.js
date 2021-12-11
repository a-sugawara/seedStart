import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./Splash.css"


export default function Splash({projectsArr}) {
    const [idx, setIdx] = useState(0)
    let {projects: splashProjects} = useSelector(state => state?.project)
    
    const singleProject = (
        splashProjects[idx]
        )

    const singleProjectCard = <NavLink to={`/projects/${singleProject?.id}`}>
        <div className="project-card">
            <div className="image-bar">
                <img className="project-card-img" src={singleProject?.images[0]}/>
                <div className="progress-bar-all">
                    <div className="progress-status-all"
                    style={{width:`${(singleProject?.backing?.reduce((acc, a)=>acc+a,0)) / (singleProject?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="project-card-info" >
                <div className="title">{singleProject?.title}</div>
                <div>Goal: {'$'}{singleProject?.goal_amount}</div>
                <div>By {singleProject?.user}</div>
            </div>
            <div>
            </div>
        </div>
    </NavLink>

    
    
  return (
      <div className="splash-wrapper">
          <div className="splash-top">
              <div className="left splashbox">
                  <div className="left-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                  </div>
              </div>
              <div className="mid splashbox">
                  {/* {console.log('this is the single project', oneToLengthOfProjects(+splashProjects?.length))} */}
                  {/* {splashProjectArray[0]} */}
                  {singleProjectCard}
              </div>
              <div className="right splashbox">
                <img className="splash-logo-img" src={"https://cdn.discordapp.com/attachments/915741036024827916/918730184356663396/Untitled-4.png"}/>
                <div className="right-text">
                    Seed Starter
                </div>
              </div>
          </div>
          <div className="splash-bottom">
              <div className="long-splashbox">
                  <NavLink to='/login' className="login">Login</NavLink>
                  <NavLink to='/sign-up' className="sign-up">Sign up</NavLink>
              </div>
              <div className="short-splashbox">
                  <div className="top">
                      <div onClick={() => setIdx(projectsArr[0])} className="circle one">
                      </div>
                      <div onClick={() => setIdx(projectsArr[1])} className="circle two">
                      </div>
                      <div onClick={() => setIdx(projectsArr[2])} className="circle three">
                      </div>
                      <div onClick={() => setIdx(projectsArr[3])} className="circle four">
                      </div>
                      <div onClick={() => setIdx(projectsArr[4])} className="circle five">
                      </div>
                  </div>
                  <NavLink to='/'className="bottom">
                      See All Projects
                  </NavLink>
              </div>
          </div>
      </div>
  );
}

