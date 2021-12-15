import React from "react";
import PropTypes from "prop-types";
import UploadImageContainer from "../wall/header/upload_image_container";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const CoverPhotoEditButton = ({ user, openModal }) => (
  <div className="edit-button">
    {/* <i className="fas fa-camera" /> */}
    <UploadImageContainer avatarUser={user} photoType="cover_photo" />
    <span>Edit Cover Photo</span>
  </div>
);

const CoverPhoto = ({ user, showEdit, openModal }) => (
  <>
    <div className="cover-photo-container">
      {user.coverPhoto ? (
        <>
          <img
            className="cover-photo"
            src={`${user.coverPhoto}`}
            alt="cover photo"
          />
          {showEdit && <CoverPhotoEditButton user={user} openModal={openModal} />}
        </>
      ) : (
        <>{showEdit && <CoverPhotoEditButton user={user} openModal={openModal} />}</>
      )}
    </div>
  </>
);

CoverPhoto.propTypes = {
  user: PropTypes.object.isRequired,
  showEdit: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal("cover_photo")),
})

export default connect(null, mapDispatchToProps)(CoverPhoto);