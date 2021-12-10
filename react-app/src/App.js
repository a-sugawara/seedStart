import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <BrowserRouter>
      <NavBar />
      <CategoryBar/>
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route> */}
        <Route path='/category/:catId' exact={true}>
          <CategoryResults />
        </Route>
        <Route path='/projects' exact={true}>
          <AllProjectsPage />
        </Route>
        <Route path='/discover/:term'>
          <SearchedProjectsPage/>
        </Route>
        {/* <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
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
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
          <AllProjectsPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
