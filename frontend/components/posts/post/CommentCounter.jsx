import React from "react";
import PropTypes from "prop-types";

const CommentCounter = ({ post }) => {
  return (
    <div className="comment-counts">
      {post.childPosts ? (
        <span>{post.childPosts.length} comments</span>
      ) : (
        <span>0 comments</span>
      )}
    </div>
  );
};

CommentCounter.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentCounter;