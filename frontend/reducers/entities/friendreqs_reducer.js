import {
  RECEIVE_FRIENDREQ,
  RECEIVE_FRIENDREQS,
  REMOVE_FRIENDREQ,
} from "../../actions/friendreq_actions";

const friendreqsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FRIENDREQ:
      return Object.assign({}, state, action.friendreq);
    case RECEIVE_FRIENDREQS:
      return Object.assign({}, action.friendreqs);
    case REMOVE_FRIENDREQ:
      let nextState = Object.assign({}, state);
      delete nextState[action.friendreqId];
      return nextState;
    default:
      return state;
  }
};

export default friendreqsReducer;