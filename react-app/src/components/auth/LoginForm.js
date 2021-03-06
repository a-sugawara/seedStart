import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './Login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/projects' />;
  }

  return (
    <div className="login-container">
      <div className="sidebar"></div>
      <form onSubmit={onLogin} className="login-modal">
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>{error.split(':')[1]}</div>
          ))}
        </div>
          <input
            className="email-input"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            required
            onChange={updateEmail}
          />
          <input
            className="password-input"
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            required
            onChange={updatePassword}
          />
          <button type='submit' className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
