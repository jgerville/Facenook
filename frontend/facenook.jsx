import React from "react";
import ReactDOM from "react-dom";
import {
  acceptFriendRequest,
  getRelatedFriendreqs,
  sendFriendRequest,
  unfriend,
} from "./actions/friendreq_actions";
import { search } from "./actions/user_actions";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser.id },
      entities: { users: { [window.currentUser.id]: window.currentUser } },
    };
  }

  const root = document.getElementById("root");
  const store = configureStore(preloadedState);
  delete window.currentUser;

  ReactDOM.render(<Root store={store} />, root);

  // testing:
  window.sendfr = sendFriendRequest;
  window.acceptfr = acceptFriendRequest;
  window.getfr = getRelatedFriendreqs;
  window.unfriend = unfriend;
  window.search = search;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});