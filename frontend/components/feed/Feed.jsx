import React from "react";
import PostsPage from "../posts/PostsPage";

const Feed = ({ currentUser }) => (
  <main className="feed">
    <PostsPage type="newsfeed" wallOwner={currentUser} currentUser={currentUser} />
  </main>
);

export default Feed;