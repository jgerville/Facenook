import {
  RECEIVE_FRIENDREQ,
  RECEIVE_FRIENDREQS,
} from "../../actions/friendreq_actions";

const friendreqsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FRIENDREQ:
      return Object.assign({}, state, action.friendreq);
    case RECEIVE_FRIENDREQS:
      return Object.assign({}, state, action.friendreqs);
    default:
      return state;
  }
};

export default friendreqsReducer;