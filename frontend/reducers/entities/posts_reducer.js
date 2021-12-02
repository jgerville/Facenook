import {
  CLEAR_POSTS,
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST,
} from "../../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, action.post);
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.posts);
    case REMOVE_POST:
      const nextState = Object.assign({}, state);
      delete nextState[action.postId];
      return nextState;
    case CLEAR_POSTS:
      return {};
    default:
      return state;
  }
};

export default postsReducer;