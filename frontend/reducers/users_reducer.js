import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_RELATED_USERS, RECEIVE_WALL_OWNER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_WALL_OWNER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_RELATED_USERS:
      return Object.assign({}, state, users)
    default:
      return state;
  }
}

export default usersReducer;