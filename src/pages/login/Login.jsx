import React, { useContext } from 'react';
import './login.css';
import { useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContex } from '../../contex/AuthContext';

import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContex);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mysocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Mysocial.
          </span>
        </div>
        <div className="loginRight">
          <form
            className="loginbox"
            onSubmit={handleClick}
          >
            <input
              type="email"
              required
              placeholder="Email"
              className="loginInput"
              ref={email}
            />
            <input
              type="password"
              required
              minLength="6"
              placeholder="Password"
              className="loginInput"
              ref={password}
            />
            <button
              type="submit"
              className="loginButton"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress
                  color="inherit"
                  size="20px"
                />
              ) : (
                'Log In'
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress
                  color="inherit"
                  size="20px"
                />
              ) : (
                'Create a New Account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
