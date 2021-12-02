import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../graphics/Avatar";
import TextareaAutosize from "react-textarea-autosize";

const ComposeComment = ({ parentPost, currentUser, createPost }) => {
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
        createPost(post).then(() => setBody(""))
      }
    }
  }

  return (
    <div className="create-comment">
      <Avatar user={currentUser} />
      <div className="comment-input">
        <TextareaAutosize
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
  createPost: PropTypes.func.isRequired,
};

export default ComposeComment;
