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
      return Object.assign({}, state, action.payload.posts);
    case REMOVE_POST:
      const nextState = Object.assign({}, state);
      if (nextState[action.postId].parentPostId) {
        const parentId = nextState[action.postId].parentPostId;
        const childIdx = nextState[parentId].childPosts.indexOf(action.postId)
        if ((childIdx) > -1) {
          nextState[parentId].childPosts.splice(childIdx, 1)
        }
      }
      delete nextState[action.postId];
      return nextState;
    case CLEAR_POSTS:
      return {};
    default:
      return state;
  }
};

export default postsReducer;