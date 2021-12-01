import {
  addFileToProfile,
  searchUsers,
  searchUsersById,
  showUser,
  updateProfile,
} from "../util/users_api_util";

export const RECEIVE_WALL_OWNER = "RECEIVE_WALL_OWNER";
export const RECEIVE_RELATED_USERS = "RECEIVE_RELATED_USERS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const UPDATE_CANCEL_TOKEN = "UPDATE_CANCEL_TOKEN";

const receiveWallOwner = (user) => ({
  type: RECEIVE_WALL_OWNER,
  user,
});

const receiveRelatedUsers = (users) => ({
  type: RECEIVE_RELATED_USERS,
  users,
});

const receiveSearchResults = (users) => ({
  type: RECEIVE_SEARCH_RESULTS,
  users,
});

export const updateCancelToken = (cancelToken) => ({
  type: UPDATE_CANCEL_TOKEN,
  cancelToken,
});

export const getWallInfo = (userId) => (dispatch) =>
  showUser(userId).then((user) => dispatch(receiveWallOwner(user)));

export const editUserInfo = (user) => (dispatch) =>
  updateProfile(user).then((user) => dispatch(receiveWallOwner(user)));

export const uploadFileToUser = (user) => (dispatch) =>
  addFileToProfile(user).then((user) => dispatch(receiveWallOwner(user)));

export const search = (query, source) => (dispatch) =>
  searchUsers(query, source).then((users) =>
    dispatch(receiveSearchResults(users))
  );

export const getSomeUsers = (idsArr) => (dispatch) =>
  searchUsersById(idsArr).then((users) => dispatch(receiveRelatedUsers(users)));