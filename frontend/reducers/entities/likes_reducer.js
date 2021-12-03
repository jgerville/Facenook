import { RECEIVE_LIKE, REMOVE_LIKE } from "../../actions/like_actions";
import { RECEIVE_POSTS } from "../../actions/post_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.payload.likes);
    case RECEIVE_LIKE:
      return Object.assign({}, state, action.like);
    case RECEIVE_LIKES:
      return Object.assign({}, state, action.likes);
    case REMOVE_LIKE:
      const nextState = Object.assign({}, state);
      delete nextState[action.likeId]
      return nextState;
    default:
      return state;
  }
}

export default likesReducer;