import axios from "axios";

export const createPost = (post) => 
  axios.post("/api/posts", { post }).then((res) => res.data);

export const showPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data);

export const findPostsByFriends = (friendIdsArr) =>
  axios.post("/api/posts/by_friends", {post: { friendIdsArr }})
    .then((res) => res.data)

export const findPostsByWallId = (wallId) =>
  axios.post(`/api/posts/by_wall/${wallId}`).then((res) => res.data)

export const editPost = (post) =>
  axios.patch(`/api/posts/${post.id}`, { post }).then((res) => res.data)

export const deletePost = (postId) =>
  axios.delete(`/api/posts/${post.id}`).then((res) => res.data)