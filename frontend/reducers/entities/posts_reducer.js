import {
  DELETE_POST,
  RECEIVE_POST,
  RECEIVE_POSTS,
} from "../../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, action.post);
    case RECEIVE_POSTS:
      return Object.assign({}, posts);
    case DELETE_POST:
      const nextState = Object.assign({}, state);
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;