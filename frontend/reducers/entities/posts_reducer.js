import { RECEIVE_LIKE, REMOVE_LIKE } from "../../actions/like_actions";
import {
  CLEAR_POSTS,
  RECEIVE_POST,
  RECEIVE_POSTS,
  REMOVE_POST,
} from "../../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, state, action.post);
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.payload.posts);
    case REMOVE_POST:
      if (nextState[action.postId].parentPostId) {
        const parentId = nextState[action.postId].parentPostId;
        const childIdx = nextState[parentId].childPosts.indexOf(action.postId)
        if ((childIdx) > -1) {
          nextState[parentId].childPosts.splice(childIdx, 1)
        }
      }
      delete nextState[action.postId];
      return nextState;
    case RECEIVE_LIKE:
      const likeObject = Object.values(action.like)[0];
      const postId = likeObject.postId;
      const likedPost = nextState[postId];
      likedPost.likes.push(likeObject.id);
      return nextState;
    case REMOVE_LIKE:
      const postsArray = Object.values(nextState);
      for (let i = 0; i < postsArray.length; i++) {
        let likesArray = postsArray[i].likes;
        let idx = likesArray.indexOf(action.likeId);
        if (idx > -1) {
          likesArray.splice(idx, 1);
        }
      }
      return nextState;
    case CLEAR_POSTS:
      return {};
    default:
      return state;
  }
};

export default postsReducer;