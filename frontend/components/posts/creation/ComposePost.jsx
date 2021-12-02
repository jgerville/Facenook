import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import UserCard from "../../graphics/UserCard";
import { createPost } from "../../../actions/post_actions";
import { connect } from "react-redux";

const ComposePost = ({ user, wallOwner, close, createPost, originalPost, edit }) => {
  const headerText = originalPost ? "Edit Post" : "Create Post"
  const placeholderText = originalPost ? "" : `Write something to ${wallOwner.fname}...`;
  const [body, setBody] = originalPost ? useState(originalPost.body) : useState("")

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    if (body === "") {
      setDisabled(true);
      return;
    }
    const post = {
      wall_id: wallOwner.id,
      author_id: user.id,
      body,
    };
    if (edit) {
      post["id"] = originalPost;
    }
    if (edit) {
      edit(post).then(() => close())
    } else {
      createPost(post).then(() => close());
    }
  };

  const submitText = edit ? "Save" : "Post"

  return (
    <div className="outer-modal compose">
      <div className="inner-modal">
        <div className="compose-header">
          <h3>{headerText}</h3>
          <i className="fas fa-times" onClick={close} />
        </div>
        <UserCard user={user} />
        <div className="textarea-container">
          <TextareaAutosize
            className="textbox"
            cacheMeasurements
            onChange={handleChange}
            placeholder={placeholderText}
            value={body}
          />
        </div>
        <div className="submit-container">
          <button onClick={handleSubmit} disabled={body === ""}>{submitText}</button>
        </div>
      </div>
    </div>
  );
};

ComposePost.propTypes = {
  user: PropTypes.object.isRequired,
  wallOwner: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  edit: PropTypes.func,
  originalPost: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(null, mapDispatchToProps)(ComposePost);
