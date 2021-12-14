import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PostsPage from "../posts/PostsPage";
import Sponsored from "./Sponsored";

const Feed = ({ currentUser, getUserInfo, users }) => {
  useEffect(() => {
    getUserInfo(currentUser.id);
  }, [])

  return (
    <main className="feed">
      {users ? <PostsPage type="newsfeed" wallOwner={currentUser} currentUser={currentUser} /> : null}
      <Sponsored />
    </main>
  )
};

Feed.propTypes = {
  currentUser: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  getUserInfo: PropTypes.func.isRequired,
}

export default Feed;