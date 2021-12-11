import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUp.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors([". : Passwords don't match."])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/projects' />;
  }

  return (
    <div className="login-container">
      <div className="sidebar"></div>
      <form onSubmit={onSignUp} className="login-modal">
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error.split(':')[1]}</div>
          ))}
        </div>
          <input
            className="email-input"
            placeholder="User Name"
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
          <input
            className="email-input"
            placeholder="Email"
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
          <input
            className="email-input"
            placeholder="Password"
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
          <input
            className="email-input"
            placeholder="Repeat Password"
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        <button type='submit' className="login-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
