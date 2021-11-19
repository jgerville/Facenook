import * as UsersApiUtil from "../util/users_api_util";
import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(error => dispatch(receiveErrors(error)))
)

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(user => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
  UsersApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .catch(error => dispatch(receiveErrors(error)))
)