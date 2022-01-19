import axios from "axios";

export const addFriend = (friendreq) =>
  axios.post("/api/friendreqs", { friendreq }).then((res) => res.data);

export const acceptFriend = (friendreq) =>
  axios
    .patch(`/api/friendreqs/${friendreq.id}`, { friendreq })
    .then((res) => res.data);

export const deleteFriend = (friendreqId) =>
  axios.delete(`api/friendreqs/${friendreqId}`).then((res) => res.data);

export const showRelatedFriendreqs = (userId) =>
  axios.get(`/api/friendreqs/by_user/${userId}`).then((res) => res.data);
