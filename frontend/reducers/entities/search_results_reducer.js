import { RECEIVE_SEARCH_RESULTS } from "../../actions/user_actions";

const searchResultsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, action.users)
    default:
      return state;
  }
}

export default searchResultsReducer;