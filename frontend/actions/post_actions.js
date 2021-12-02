import * as PostAPI from "../util/posts_api_util";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_POSTS = 'CLEAR_POSTS';

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId,
});

export const clearPosts = () => ({
  type: CLEAR_POSTS,
})

export const createPost = (post) => (dispatch) =>
  PostAPI.createPost(post).then((post) => dispatch(receivePost(post)));

export const getPost = (postId) => (dispatch) =>
  PostAPI.showPost(postId).then((post) => dispatch(receivePost(post)));

export const getPostsByFriends = (friendIdsArr) => (dispatch) =>
  PostAPI.findPostsByFriends(friendIdsArr).then((posts) => {
    dispatch(receivePosts(posts))
  });

export const getPostsByWall = (wallId) => (dispatch) =>
  PostAPI.findPostsByWallId(wallId).then((posts) =>
    dispatch(receivePosts(posts))
  );

export const getPostsById = (postIds) => (dispatch) =>
  PostAPI.findPostsByIds(postIds).then((posts) =>
    dispatch(receivePosts(posts))
  );

export const editPost = (post) => (dispatch) =>
  PostAPI.editPost(post).then((post) => dispatch(receivePost(post)));

export const deletePost = (postId) => (dispatch) =>
  PostAPI.deletePost(postId).then(() => dispatch(removePost(postId)));

// export const deletePost = (postId, parentPostId) => (dispatch) => 
//   PostAPI.deletePost(postId).then(() => {
//     dispatch(removePost(postId, parentPostId));
//     // dispatch(getPost(parentPostId))
//   })