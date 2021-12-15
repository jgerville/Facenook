import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../graphics/Avatar";
import TextareaAutosize from "react-textarea-autosize";

const ComposeComment = ({ parentPost, currentUser, postAction, getPost, showComments }) => {
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (body !== "") {
        const post = {
          wall_id: parentPost.wallId,
          author_id: currentUser.id,
          body,
          parent_post_id: parentPost.id,
        }
        postAction(post).then(() => {
          setBody("");
          getPost(parentPost.id);
          showComments();
        })
      }
    }
  }

  return (
    <div className="create-comment">
      <Avatar user={currentUser} />
      <div className="comment-input">
        <TextareaAutosize
          autoFocus
          onKeyDown={handleKeyDown}
          cacheMeasurements
          onChange={handleChange}
          placeholder="Write a comment..."
          value={body}
        />
      </div>
    </div>
  );
};

ComposeComment.propTypes = {
  parentPost: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  postAction: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  showComments: PropTypes.func.isRequired,
};

export default ComposeComment;
