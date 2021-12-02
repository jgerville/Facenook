import React from "react";
import PropTypes from "prop-types";

const CommentCounter = ({ post, toggle }) => {
  return (
    <div className="comment-counts" onClick={toggle}>
      {post.childPosts.length > 0 ? (
        <span className="has-comments">{post.childPosts.length} comments</span>
      ) : (
        <span className="has-no-comments">0 comments</span>
      )}
    </div>
  );
};

CommentCounter.propTypes = {
  post: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default CommentCounter;