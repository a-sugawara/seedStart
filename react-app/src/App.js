import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import AllProjectsPage from './components/AllProjectsPage';
import OneProjectPage from './components/OneProjectsPage';
import ProjectForm from './components/ProjectFormPage';
import ProjectFormEdit from './components/ProjectFormEdit'
import SearchedProjectsPage from './components/SearchedProjectsPage/SearchedProjectsPage';
import { authenticate } from './store/session';
import { allProjects } from './store/project';
import CategoryBar from "./components/CategoryBar"
import CategoryResults from './components/CategoryResults';
import Footer from './components/Footer/Footer';
import Splash from './components/Splash'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const {projects: splashProjects} = useSelector(state => state?.project)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(allProjects())
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  let projectsArr = new Set()
    if(splashProjects?.length) {
        while(projectsArr?.size < 5 ) {
            projectsArr.add(Math.floor(Math.random() * (splashProjects.length)))
          }
          projectsArr = Array.from(projectsArr);
    }

  return (
    <BrowserRouter>
      <NavBar />
      <CategoryBar/>
      <Switch>
        <Route path='/' exact={true}>
          <Splash projectsArr={projectsArr}/>
          <Footer/>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/category/:catId' exact={true}>
          <CategoryResults />
        </Route>
        <Route path='/projects' exact={true}>
          <AllProjectsPage />
        </Route>
        <Route path='/discover/' exact={true}>
          <AllProjectsPage />
        </Route>
        <Route path='/discover/:term' exact={true}>
          <SearchedProjectsPage/>
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/projects/:projectId/edit' exact={true}>
          <ProjectFormEdit/>
        </ProtectedRoute>
        <ProtectedRoute path='/projects/new' exact={true}>
          <ProjectForm/>
        </ProtectedRoute>
        <Route path='/projects/:projectId' exact={true}>
          <OneProjectPage/>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route>
        <center>
            <h1 id="h1404">404:</h1>
            <p>Page Not Found</p>
            <img alt="test" style={{filter: "grayscale(100%)", border: "10px solid transparent"}} height="450" width="650" src="https://ca-times.brightspotcdn.com/dims4/default/ef6e205/2147483647/strip/true/crop/2048x1367+0+0/resize/1486x992!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc1%2Fbe%2F09f63c9e5ce1f5af817eee063724%2Fla-na-portland-water-scare-water-bottles-sold-001"></img>
        </center>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
