import {
  acceptFriend,
  addFriend,
  deleteFriend,
  showRelatedFriendreqs,
} from "../util/friendreqs_api_util";

export const RECEIVE_FRIENDREQ = "RECEIVE_FRIENDREQ";
export const RECEIVE_FRIENDREQS = "RECEIVE_FRIENDREQS";
export const REMOVE_FRIENDREQ = "REMOVE_FRIENDREQ";

const receiveFriendreq = (friendreq) => ({
  type: RECEIVE_FRIENDREQ,
  friendreq,
});

const receiveFriendreqs = (friendreqs) => ({
  type: RECEIVE_FRIENDREQS,
  friendreqs,
});

const removeFriendreq = (friendreqId) => ({
  type: REMOVE_FRIENDREQ,
  friendreqId,
});

export const sendFriendRequest = (friendreq) => (dispatch) =>
  addFriend(friendreq).then((result) => dispatch(receiveFriendreq(result)));

export const acceptFriendRequest = (friendreq) => (dispatch) =>
  acceptFriend(friendreq).then((result) => dispatch(receiveFriendreq(result)));

export const getRelatedFriendreqs = (userId) => (dispatch) =>
  showRelatedFriendreqs(userId).then((friendreqs) =>
    dispatch(receiveFriendreqs(friendreqs))
  );

export const unfriend = (friendreqId) => (dispatch) =>
  deleteFriend(friendreqId).then(() => dispatch(removeFriendreq(friendreqId)));