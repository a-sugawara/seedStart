import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{NavLink } from 'react-router-dom'
import {allProjects} from  '../../store/project'
import Footer from "../Footer/Footer";
import "./Splash.css"


export default function Splash({projectsArr}) {
    const [idx, setIdx] = useState(0)
    const [classs, setClasss]=useState("tiny")
    let {projects: splashProjects} = useSelector(state => state?.project)
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

                <p>At <span>Seed Starter</span> our mission is to help give a platform to help sprout the seeds of those in need. Much of the world is far too concerned about profits and bottom lines.
                We believe it is our duty to help those who help the world. Our projects vary from Eco-tech to community based projects. <span>Press the circles to see more projects!</span>
            </p>
                  </div>
              </div>
              <div className="mid splashbox">
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
                      <div onClick={() => small() } className={`circle one one${classs}` }>
                      </div>
                      <div onClick={() => med()} className={`circle two two${classs}` }>
                      </div>
                      <div onClick={() => xmed()} className={`circle three three${classs}` }>
                      </div>
                      <div onClick={() => large()} className={`circle four four${classs}` }>
                      </div>
                      <div onClick={() => xlarge()} className={`circle five five${classs}` }>
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
