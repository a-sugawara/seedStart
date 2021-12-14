import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import LoginModal from '../components/auth/LoginModal';
import SearchForm from '../components/Searchbar';
import SignUpModal from './auth/SignUpModal';


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
        <SignUpModal/>
    </div>
  }

  return (
    <div className="navbar">
      <NavLink to='/' exact={true} activeClassName='active'>
       <img className="logo-img" alt="logo-img" src={"https://cdn.discordapp.com/attachments/915741036024827916/918730184356663396/Untitled-4.png"}/>
      </NavLink>
      {projectbutton}
      <SearchForm/>
      {navbuttons}
    </div>
  );
}

export default NavBar;

{/* <NavLink to='/users' exact={true} activeClassName='active'>
  Users
</NavLink> */}
