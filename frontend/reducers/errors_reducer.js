import { combineReducers } from "redux";
import loginErrorsReducer from "./errors/login_errors_reducer";
import signupErrorsReducer from "./errors/signup_errors_reducer";

const errorsReducer = combineReducers({
  login: loginErrorsReducer,
  signup: signupErrorsReducer,
});

export default errorsReducer;