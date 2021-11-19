import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout } from './util/session_api_util';
import { signup } from './util/users_api_util';

document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById('root');

  const store = configureStore();
  ReactDOM.render(<h1>react is working</h1>, root)

  // testing:
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})