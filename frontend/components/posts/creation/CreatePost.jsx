import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../graphics/Avatar";

const CreatePost = ({ currentUser, wallOwner }) => {
  const isMine = currentUser.id === wallOwner.id;
  const message = isMine
    ? "What's on your mind?"
    : `Write something to ${wallOwner.fname}...`;

  return (
    <>
      <div className="create-post">
        <div className="create-post-top">
          <Avatar user={currentUser} />
          <div className="fake-input">
            <span>{message}</span>
          </div>
        </div>
        {/* later: create-post-bottom, with buttons */}
      </div>

    </>
  );
};

CreatePost.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object.isRequired,
};


export default CreatePost;