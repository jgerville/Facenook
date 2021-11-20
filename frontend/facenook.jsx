import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {id: window.currentUser.id },
      entities: {users: { [window.currentUser.id]: window.currentUser }}
    }
  }

  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  // delete window.currentUser;

  ReactDOM.render(<Root store={store} />, root)

  // testing:
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})