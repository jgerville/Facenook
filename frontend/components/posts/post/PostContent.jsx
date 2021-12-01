import React from "react";
import PropTypes from "prop-types";

const PostContent = ({ body }) => (
  <div className="post-body">
    <p>{body}</p>
  </div>
);

PostContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default PostContent;