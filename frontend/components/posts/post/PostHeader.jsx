import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../graphics/UserCard";

const PostHeader = ({ post, user }) => {
  return (
    <div className="post-header">
      <UserCard user={user} time={post.createdAt} editedAt={post.updatedAt} />
    </div>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default PostHeader;