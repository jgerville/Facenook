import React, { useState } from "react";
import PropTypes from "prop-types";
import { deletePost, getPost } from "../../../actions/post_actions";
import { connect } from "react-redux";

const EditAndDeleteButtons = ({ startEditing, deletePost, getPost, comment }) => {
  const [showPanel, setShowPanel] = useState(false);

  const togglePanel = () => setShowPanel(prev => !prev);

  const handleDelete = () => {
    deletePost(comment.id)//.then(() => getPost(comment.parentPostId));
  }

  return (
    <>
      <div className="dots" onClick={togglePanel}>
        <i className="fas fa-ellipsis-h"/>
      </div>
      {showPanel && (
        <div className="panel">
          <button onClick={startEditing}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id)),
  getPost: (id) => dispatch(getPost(id)),
});

EditAndDeleteButtons.propTypes = {
  startEditing: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(EditAndDeleteButtons);