import { UPDATE_CANCEL_TOKEN } from "../actions/user_actions";

const cancelTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CANCEL_TOKEN:
      return action.cancelToken;
    default:
      return state;
  }
}

export default cancelTokenReducer;