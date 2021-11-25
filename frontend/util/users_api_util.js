import axios from "axios";

export const signup = (user) =>
  axios.post("/api/users", user).then((res) => res.data);

export const showUser = (userId) =>
  axios.get(`/api/users/${userId}`).then((res) => res.data);

export const updateProfile = (user) => (
  axios.patch(`/api/users/${user.user.id}`, user).then((res) => res.data)
)