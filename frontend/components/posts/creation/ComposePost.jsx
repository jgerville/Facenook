import React, { useEffect, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from "prop-types";
import UserCard from "../../graphics/UserCard";
import { createPost } from "../../../actions/post_actions";
import { connect } from "react-redux";

const ComposePost = ({ user, wallOwner, close, createPost }) => {
  // const body = useRef();
  const placeholderText = `Write something to ${wallOwner.fname}...`;
  const [placeholder, setPlaceholder] = useState(placeholderText);
  const [disabled, setDisabled] = useState(true);
  const body = useRef("");

  const handleChange = (e) => {
    body.current = e.target.value;
  };

  const handleFocus = (e) => {
    setPlaceholder("");
    setDisabled(false);
  };

  const handleBlur = (e) => {
    if (body.current === "") {
      setPlaceholder(placeholderText);
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    if (body.current === "") {
      setDisabled(true);
      return;
    }
    const post = {
      wall_id: wallOwner.id,
      author_id: user.id,
      body: body.current,
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
        <div className="textbox-container">
          <div className="textbox-overlay">{placeholder}</div>
          <ContentEditable
            className="textbox"
            html={body.current}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="submit-container">
          <button onClick={handleSubmit} disabled={disabled}>Post</button>
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
