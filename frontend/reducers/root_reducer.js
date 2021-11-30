import { combineReducers } from "redux";
import cancelTokenReducer from "./cancel_token_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer,
  errors: errorsReducer,
  cancelToken: cancelTokenReducer,
});

export default rootReducer;