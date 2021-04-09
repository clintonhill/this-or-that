import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demo = () => {
    setCredential('demo@user.io')
    setPassword('password')
  }

  return (
      <form onSubmit={handleSubmit} className='modal-form'>
        <div className='modal-form__form'>
          <div className='modal-form__title'>Log In</div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className='modal-form__form-field'>
            <label>
              Username or Email
            </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
          <div className='modal-form__form-field'>
            <label>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='demo-user'>Don't have an account? Click <span onClick={demo}>here</span> to login as a demo user.</div>
          <div className='modal-form__button'>
            <button type="submit">Log In</button>
          </div>
        </div>
      </form>
  );
}

export default LoginForm;
