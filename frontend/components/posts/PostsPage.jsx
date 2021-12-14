import React from "react";
import PropTypes from "prop-types";
import CreatePostContainer from "./creation/create_post_container";
import PostIndexContainerForWall from "./index/post_index_container_wall";
import PostIndexContainerForNewsfeed from "./index/post_index_container_newsfeed";

const PostsPage = ({ wallOwner, currentUser, type }) => {
  const friendsOrSelf = currentUser.friends.includes(wallOwner.id) || currentUser.id === wallOwner.id

  return (
    <div className="posts-page">
      {friendsOrSelf && <CreatePostContainer wallOwner={wallOwner} currentUser={currentUser} type={type} />}
      {type === "wall" && <PostIndexContainerForWall />}
      {type === "newsfeed" && <PostIndexContainerForNewsfeed />}
    </div>
  );
};

PostsPage.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default PostsPage;