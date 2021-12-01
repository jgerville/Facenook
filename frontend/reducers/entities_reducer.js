import { combineReducers } from "redux";
import friendreqsReducer from "./entities/friendreqs_reducer";
import postsReducer from "./entities/posts_reducer";
import searchResultsReducer from "./entities/search_results_reducer";
import usersReducer from "./entities/users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendreqs: friendreqsReducer,
  searchResults: searchResultsReducer,
  posts: postsReducer,
});

export default entitiesReducer;