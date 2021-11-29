import {
  acceptFriend,
  addFriend,
  showRelatedFriendreqs,
} from "../util/friendreqs_api_util";

export const RECEIVE_FRIENDREQ = "RECEIVE_FRIENDREQ";
export const RECEIVE_FRIENDREQS = "RECEIVE_FRIENDREQS";

const receiveFriendreq = (friendreq) => ({
  type: RECEIVE_FRIENDREQ,
  friendreq,
});

const receiveFriendreqs = (friendreqs) => ({
  type: RECEIVE_FRIENDREQS,
  friendreqs,
});

export const sendFriendRequest = (friendreq) => (dispatch) =>
  addFriend(friendreq).then((result) => dispatch(receiveFriendreq(result)));

export const acceptFriendRequest = (friendreq) => (dispatch) =>
  acceptFriend(friendreq).then((result) => dispatch(receiveFriendreq(result)));

export const getRelatedFriendreqs = (userId) => (dispatch) =>
  showRelatedFriendreqs(userId).then((friendreqs) =>
    dispatch(receiveFriendreqs(friendreqs))
  );