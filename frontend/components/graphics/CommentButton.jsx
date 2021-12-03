import React from "react";
import PropTypes from "prop-types";

const CommentButton = ({ toggleComments }) => {
  return (
    <div className="comment button-container">
      <button className="comment-button" onClick={toggleComments}>
        <i className="far fa-comment-alt" />
        <span>Comment</span>
      </button>
    </div>
  );
};

CommentButton.propTypes = {
  toggleComments: PropTypes.func.isRequired,
};

export default CommentButton;