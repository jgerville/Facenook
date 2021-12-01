import React from "react";
import PropTypes from "prop-types";

const PostContent = ({ body }) => (
  <div className="post-content">
    <p className="post-body">{body}</p>
  </div>
);

PostContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default PostContent;