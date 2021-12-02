import React, { useState } from "react";
import PropTypes from "prop-types";
import ComposePost from "../creation/ComposePost";

const EditAndDeleteButtons = ({ startEditing, deletePost, comment, currentUser, users, modal, closeModal, editPost }) => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => setShowPanel(prev => !prev);

  const handleDelete = () => {
    deletePost(comment.id)
  }

  const canEdit = currentUser.id === comment.authorId;

  const handleEditingTypes = () => (
    closeModal ? startEditing(`edit-post-${comment.id}`) : startEditing()
  )

  return (
    <>
      {canEdit ? (
        <div className="dots" onClick={togglePanel}>
          <i className="fas fa-ellipsis-h"/>
          {showPanel && (
            <div className="panel">
              <button onClick={handleEditingTypes}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      ) : null}
      {/* if we don't make each edit-post modal different, they will all open at once. */}
      {modal && modal === `edit-post-${comment.id}` && (
        <ComposePost 
          user={currentUser} 
          wallOwner={users[comment.wallId]} 
          close={closeModal}
          originalPost={comment}
          edit={editPost}
        />
      )}
    </>
  );
};

EditAndDeleteButtons.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  modal: PropTypes.string,
  closeModal: PropTypes.func,
  users: PropTypes.object,
  editPost: PropTypes.func,
};

export default EditAndDeleteButtons;