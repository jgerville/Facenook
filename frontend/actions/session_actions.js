import * as UsersApiUtil from "../util/users_api_util";
import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_LOGIN_ERRORS = "RECEIVE_LOGIN_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const CLEAR_SIGNUP_ERRORS = 'CLEAR_SIGNUP_ERRORS';
export const CLEAR_LOGIN_ERRORS = 'CLEAR_LOGIN_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveLoginErrors = (errors) => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors,
});

const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors,
});

export const clearSignupErrors = () => ({
  type: CLEAR_SIGNUP_ERRORS,
})

export const clearLoginErrors = () => ({
  type: CLEAR_LOGIN_ERRORS,
})

export const login = (user) => (dispatch) =>
  SessionApiUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch((error) => dispatch(receiveLoginErrors(error)));

export const logout = () => (dispatch) =>
  SessionApiUtil.logout().then((user) => dispatch(logoutCurrentUser()));

export const signup = (user) => (dispatch) =>
  UsersApiUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .catch((error) => dispatch(receiveSignupErrors(error)));