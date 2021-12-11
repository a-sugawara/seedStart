import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./Splash.css"


export default function Splash() {
    let dispatch = useDispatch()
    let {projects: splashProjects} = useSelector(state => state?.project)
    
    useEffect(() => {
        dispatch(allProjects())
    })

    const allProject = splashProjects?.map((project, idx) =>
    <NavLink key={idx} to={`/projects/${project.id}`}>
        <div className="project-card">
            <div className="image-bar">
                <img className="project-card-img" src={project.images[0]}/>
                <div className="progress-bar-all">
                    <div className="progress-status-all"
                    style={{width:`${(project?.backing?.reduce((acc, a)=>acc+a,0)) / (project?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="project-card-info" >
                <div className="title">{project.title}</div>
                <div>Goal: ${project.goal_amount}</div>
                <div>By {project.user}</div>
            </div>
            <div>
            </div>
        </div>
    </NavLink>
    ).reverse()

    const randomNumberGenerator = (lengthOfProjects, counter=0) => {
        if(counter >= 5) {
            return;
        } else {
            counter++
            return Math.floor(Math.random() * (lengthOfProjects+1)) 
        }
    }
    const singleProject = (
        splashProjects[randomNumberGenerator(splashProjects.length)]
        )
    
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
                  {console.log('this is the single project', singleProject)}
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
                  <div className="login">Login</div>
                  <div className="sign-up">Sign up</div>
              </div>
              <div className="short-splashbox">
                  <div className="top">
                      <div className="circle one">
                      </div>
                      <div className="circle two">
                      </div>
                      <div className="circle three">
                      </div>
                      <div className="circle four">
                      </div>
                      <div className="circle five">
                      </div>
                  </div>
                  <div className="bottom">
                      See All Projects
                  </div>
              </div>
          </div>
      </div>
  );
}

