import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./Splash.css"


export default function Splash({projectsArr}) {
    const [idx, setIdx] = useState(0)
    const [classs, setClasss]=useState("small")
    let {projects: splashProjects} = useSelector(state => state?.project)
    console.log("for the real random numbers", projectsArr)
    const singleProject = (
        splashProjects[idx]
        )

    const singleProjectCard = <NavLink to={`/projects/${singleProject?.id}`}>
        <div className="sproject-card">
            <div className="simage-bar">
                <img className="sproject-card-img" src={singleProject?.images[0]}/>
                <div className="sprogress-bar-all">
                    <div className="sprogress-status-all"
                    style={{width:`${(singleProject?.backing?.reduce((acc, a)=>acc+a,0)) / (singleProject?.goal_amount) * 100}%`}}></div>
                </div>
            </div>
            <div className="sproject-card-info" >
                <div className="stitle">{singleProject?.title}</div>
                <div className="sdescription">{singleProject?.description.length > 100 ? singleProject.description.slice(0,100)+"...":singleProject?.description}</div>
                <div>Goal: {'$'}{singleProject?.goal_amount}</div>
                <div>By {singleProject?.user}</div>
            </div>
            <div>
            </div>
        </div>
    </NavLink>

    const small=() => {
        setIdx(projectsArr[0])
        setClasss("small")
    }
    const med=() => {
        setIdx(projectsArr[1])
        setClasss("med")
    }
    const xmed=() => {
        setIdx(projectsArr[2])
        setClasss("xmed")
    }
    const large=() => {
        setIdx(projectsArr[3])
        setClasss("large")
    }
    const xlarge=() => {
        setIdx(projectsArr[4])
        setClasss("xlarge")
    }



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
                <div className="plant">
                    <img className={`splash-logo-img-top ${classs} `} src={"https://cdn.discordapp.com/attachments/898413474080772116/919162139489476658/justLeaves.png"}/>
                    <img className="splash-logo-img-bottom" src={"https://cdn.discordapp.com/attachments/898413474080772116/919162139715985469/justPot.png"}/>
                </div>
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
                  {/* <div>
                      Click me for random projects!
                  </div> */}
                      <div onClick={() => small() } className="circle one">
                      </div>
                      <div onClick={() => med()} className="circle two">
                      </div>
                      <div onClick={() => xmed()} className="circle three">
                      </div>
                      <div onClick={() => large()} className="circle four">
                      </div>
                      <div onClick={() => xlarge()} className="circle five">
                      </div>
                  </div>
                  <NavLink to='/projects'className="bottom">
                      See All Projects
                  </NavLink>
              </div>
          </div>
      </div>
  );
}
