import axios from "axios";

export const createLike = (like) =>
  axios.post("/api/likes", { like }).then((res) => res.data);

export const showLike = (likeId) =>
  axios.get(`api/likes/${likeId}`).then((res) => res.data);

export const deleteLike = (likeId) =>
  axios.delete(`api/likes/${likeId}`).then((res) => res.data);
