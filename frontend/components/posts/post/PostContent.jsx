import React from "react";
import PropTypes from "prop-types";

const PostContent = ({ body }) => (
  <div className="post-content">
    <pre className="post-body">{body}</pre>
  </div>
);

PostContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default PostContent;