import * as LikeAPI from "../util/likes_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId,
});

export const createLike = (like) => (dispatch) =>
  LikeAPI.createLike(like).then((like) => dispatch(receiveLike(like)));

export const deleteLike = (likeId) => (dispatch) =>
  LikeAPI.deleteLike(likeId).then(() => dispatch(removeLike(likeId)));

export const getLike = (likeId) => (dispatch) =>
  LikeAPI.showLike(likeId).then((like) => dispatch(receiveLike(like)));