import React from "react";
import PropTypes from "prop-types";

const CoverPhotoEditButton = () => (
  <div className="edit-button">
    <i className="fas fa-camera" />
    <span>Edit Cover Photo</span>
  </div>
);

const CoverPhoto = ({ user, isMine }) => (
  <>
    <div className="cover-photo-container">
      {user.coverPhoto ? (
        <>
          <img
            className="cover-photo"
            src={`${user.coverPhoto}`}
            alt="cover photo"
          />
        </>
      ) : (
        <>{isMine && <CoverPhotoEditButton />}</>
      )}
    </div>
  </>
);

CoverPhoto.propTypes = {
  user: PropTypes.object.isRequired,
  isMine: PropTypes.bool,
};

export default CoverPhoto;