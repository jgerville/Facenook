import React from "react";
import PropTypes from "prop-types";
import UploadImageContainer from "../wall/header/upload_image_container";

const Avatar = ({ user, isMine }) => (
  <>
    {user.profpic ? (
      <div className="avatar-container">
        <img className="avatar" src={`${user.profpic}`} alt="profile picture" />
        {isMine && <UploadImageContainer avatarUser={user} photoType="profpic" />}
      </div>
    ) : (
      <div className="avatar-container">
        <div className="avatar"></div>
        {isMine && <UploadImageContainer avatarUser={user} photoType="profpic" />}
      </div>
    )}
  </>
)

Avatar.propTypes = {
  user: PropTypes.object,
  isMine: PropTypes.bool,
}

export default Avatar;