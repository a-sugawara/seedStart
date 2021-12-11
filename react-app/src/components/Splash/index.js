
import "./Splash.css"


const Splash = () => {
//   const sessionUser = useSelector(state => state.session.user);
//   let navbuttons
//   let projectbutton
//   if (sessionUser) {
//     projectbutton=
//     <NavLink to='/projects/new' exact={true} activeClassName='active'>
//       <div className="navbtn">
//         Start a Project
//       </div>
//     </NavLink>

//     navbuttons =<div>
//      <LogoutButton />
//       </div>
//   }else {
//     projectbutton=null
//     navbuttons =<div className="navbtn-holder">
//         <LoginModal/>
//         <SignUpModal/>
//     </div>
//   }

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
    // <div className="navbar">
    //   <NavLink to='/' exact={true} activeClassName='active'>
    //    <img className="logo-img" src={"https://cdn.discordapp.com/attachments/915741036024827916/918730184356663396/Untitled-4.png"}/>
    //   </NavLink>
    //   {projectbutton}
    //   <SearchForm/>
    //   {navbuttons}
    // </div>
  );
}

export default Splash;
