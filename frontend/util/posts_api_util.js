import axios from "axios";

export const createPost = (post) => 
  axios.post("/api/posts", { post }).then((res) => res.data);

export const showPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data);

export const findPostsByFriends = (friend_ids) =>
  axios.post("/api/posts/by_friends", {post: { friend_ids }})
    .then((res) => res.data)

export const findPostsByWallId = (wallId) =>
  axios.post(`/api/posts/by_wall/${wallId}`).then((res) => res.data)

export const findPostsByIds = (ids) =>
  axios.post("/api/posts/by_ids", {post: { ids }}).then((res) => res.data)

export const editPost = (post) =>
  axios.patch(`/api/posts/${post.id}`, { post }).then((res) => res.data)

export const deletePost = (postId) =>
  axios.delete(`/api/posts/${postId}`).then((res) => res.data)