import {
  CLEAR_SIGNUP_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_SIGNUP_ERRORS,
} from "../../actions/session_actions";

const signupErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_SIGNUP_ERRORS:
      return [];
    default:
      return state;
  }
};

export default signupErrorsReducer;