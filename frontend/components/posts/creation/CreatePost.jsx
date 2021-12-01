import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../graphics/Avatar";
import ComposePost from "./ComposePost";

const CreatePost = ({ currentUser, wallOwner, modal, openModal, closeModal }) => {
  const isMine = currentUser.id === wallOwner.id;
  const message = isMine
    ? "What's on your mind?"
    : `Write something to ${wallOwner.fname}...`;

  return (
    <>
      <div className="create-post">
        <div className="create-post-top">
          <Avatar user={currentUser} />
          <div className="fake-input" onClick={openModal}>
            <span>{message}</span>
          </div>
          {modal === "compose-post" && (
            <ComposePost 
              user={currentUser} 
              wallOwner={wallOwner} 
              close={closeModal} 
            />
          )}
        </div>
        {/* later: create-post-bottom, with buttons */}
      </div>

    </>
  );
};

CreatePost.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object.isRequired,
  modal: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};


export default CreatePost;