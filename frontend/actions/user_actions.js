import { showUser } from "../util/users_api_util";

export const RECEIVE_WALL_OWNER = 'RECEIVE_WALL_OWNER';
export const RECEIVE_RELATED_USERS = 'RECEIVE_RELATED_USERS';

const receiveWallOwner = user => ({
  type: RECEIVE_WALL_OWNER,
  user
})

const receiveRelatedUsers = users => ({
  type: RECEIVE_RELATED_USERS,
  users
})

export const getWallInfo = userId => dispatch => (
  showUser(userId)
    .then(user => dispatch(receiveWallOwner(user)))
)