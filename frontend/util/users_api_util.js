import axios from "axios";

export const signup = (user) =>
  axios.post("/api/users", user).then((res) => res.data);

export const showUser = (userId) =>
  axios.get(`/api/users/${userId}`).then((res) => res.data);

export const updateProfile = (user) =>
  axios.patch(`/api/users/${user.user.id}`, user).then((res) => res.data);

export const addFileToProfile = (user) =>
  axios
    .patch(`/api/users/${user.id}`, user.data, {
      headers: { "Content-Type": "multipart/form-data", processData: "false" },
    })
    .then((res) => res.data);

export const searchUsers = (query, source) =>
  axios
    .get("/api/users", { params: query, cancelToken: source.token })
    .then((res) => res.data);

export const searchUsersById = (idsArr) =>
  axios
    .post("/api/users/by_ids", { user: { ids: idsArr } })
    .then((res) => res.data);