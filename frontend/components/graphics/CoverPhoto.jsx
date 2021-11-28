import React from "react";
import PropTypes from "prop-types";
import UploadImageContainer from "../wall/header/upload_image_container";

const CoverPhotoEditButton = ({ user }) => (
  <div className="edit-button">
    {/* <i className="fas fa-camera" /> */}
    <UploadImageContainer avatarUser={user} photoType="cover_photo" />
    <span>Edit Cover Photo</span>
  </div>
);

const CoverPhoto = ({ user, showEdit }) => (
  <>
    <div className="cover-photo-container">
      {user.coverPhoto ? (
        <>
          <img
            className="cover-photo"
            src={`${user.coverPhoto}`}
            alt="cover photo"
          />
          {showEdit && <CoverPhotoEditButton user={user} />}
        </>
      ) : (
        <>{showEdit && <CoverPhotoEditButton user={user} />}</>
      )}
    </div>
  </>
);

CoverPhoto.propTypes = {
  user: PropTypes.object.isRequired,
  showEdit: PropTypes.bool,
};

export default CoverPhoto;