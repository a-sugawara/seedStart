import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {allProjects, postLike, deleteLike} from  '../../store/project'
import Footer from "../Footer/Footer";
import SingleProject from "./SingleProject"
import "./AllProjectsPage.css"


export default function AllProjectsPage(){
    let dispatch = useDispatch()
    let projects = useSelector(state => state.project.projects)
    let sessionUser = useSelector(state => state.session.user)



    const details = projects?.map((project, idx) =>
    <SingleProject  projects={projects} project={project} idx={idx} sessionUser={sessionUser} />
    ).reverse()

    useEffect(()=>{
        dispatch(allProjects())},
        [dispatch]
    )

    return <div>
    <div className='page-header'>All Projects</div>
    <div className="projects-wrapper">
        {details}
    </div>
        <Footer/>
    </div>
}
