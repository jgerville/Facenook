import React, { useState } from "react";
import PropTypes from "prop-types";

const EditAndDeleteButtons = ({ startEditing, deletePost, comment, currentUserId }) => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => setShowPanel(prev => !prev);

  const handleDelete = () => {
    deletePost(comment.id)
  }

  const canEdit = currentUserId === comment.authorId;

  return (
    <>
      {canEdit ? (
        <div className="dots" onClick={togglePanel}>
          <i className="fas fa-ellipsis-h"/>
          {showPanel && (
            <div className="panel">
              <button onClick={startEditing}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

EditAndDeleteButtons.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  currentUserId: PropTypes.number.isRequired,
};

export default EditAndDeleteButtons;