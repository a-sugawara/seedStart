import React from 'react';
import { NavLink } from 'react-router-dom';
import "./CategoryBar.css"

const CategoryBar =() =>{

    return <div className="category-bar">
        <NavLink to="/category/1">
            <div className="category-name">Parks {'&'} Recreation</div>
        </NavLink>
        <NavLink to="/category/2">
            <div className="category-name">Local Businesses</div>
        </NavLink>
        <NavLink to="/category/3">
            <div className="category-name">Environment</div>
        </NavLink>
        <NavLink to="/category/4">
            <div className="category-name">Foods</div>
        </NavLink>
        <NavLink to="/category/5">
            <div className="category-name">Culture</div>
        </NavLink>
        <NavLink to="/category/6">
            <div className="category-name">Green Tech {'&'} Energy</div>
        </NavLink>
        <NavLink to="/category/7">
            <div className="category-name">Housing</div>
        </NavLink>
        <NavLink to="/category/8">
            <div className="category-name">Community</div>
        </NavLink>
        <NavLink to="/category/9">
            <div className="category-name">Other</div>
        </NavLink>
        <NavLink to="/projects">
            <div className="category-name">All</div>
        </NavLink>
    </div>
}

export default CategoryBar
