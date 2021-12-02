import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../../graphics/Avatar";
import TextareaAutosize from "react-textarea-autosize";

const EditComment = ({ comment, currentUser, postAction, getPost, stopEditing }) => {
  const [body, setBody] = useState(comment.body);

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (body !== "") {
        const post = {
          id: comment.id,
          wall_id: comment.wallId,
          author_id: currentUser.id,
          body,
          parent_post_id: comment.parentPostId,
        }
        postAction(post).then(() => {
          setBody("");
          stopEditing();
          // getPost(comment.id);
        })
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      stopEditing();
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

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  postAction: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  stopEditing: PropTypes.func.isRequired,
};

export default EditComment;
