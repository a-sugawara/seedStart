
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import LoginModal from '../components/auth/LoginModal';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  let navbuttons
  let projectbutton
  if (sessionUser) {
    projectbutton=
    <NavLink to='/projects/new' exact={true} activeClassName='active'>
      <div className="navbtn">
        Start a Project
      </div>
    </NavLink>

    navbuttons =<div>
     <LogoutButton />
      </div>
  }else {
    projectbutton=null
    navbuttons =<div className="navbtn-holder">
        <LoginModal/>
      <NavLink to='/sign-up' exact={true} activeClassName='active'>
        <div className="navbtn">
          Sign Up
        </div>
      </NavLink>
    </div>
  }

  return (
    <div className="navbar">
      <NavLink to='/' exact={true} activeClassName='active'>
        <div>
          Home
        </div>
      </NavLink>
      {projectbutton}
      {navbuttons}
    </div>
  );
}

export default NavBar;

{/* <NavLink to='/users' exact={true} activeClassName='active'>
  Users
</NavLink> */}
