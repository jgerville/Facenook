import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import PropTypes from "prop-types";
import UserCard from "../../graphics/UserCard";
import { createPost } from "../../../actions/post_actions";
import { connect } from "react-redux";

const ComposePost = ({ user, wallOwner, close, createPost }) => {
  const placeholderText = `Write something to ${wallOwner.fname}...`;
  const [body, setBody] = useState("");

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
    createPost(post).then(() => close());
  };

  return (
    <div className="outer-modal compose">
      <div className="inner-modal">
        <div className="compose-header">
          <h3>Create post</h3>
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
          <button onClick={handleSubmit} disabled={body === ""}>Post</button>
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
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(null, mapDispatchToProps)(ComposePost);
