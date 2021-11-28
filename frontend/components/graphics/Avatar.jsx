import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ user, isMine }) => (
  <>
    {user.profpic ? (
      <div className="avatar-container">
        <img className="avatar" src={`${user.profpic}`} alt="profile picture" />
        {isMine && <i className="fas fa-camera" />}
      </div>
    ) : null}
  </>
)

Avatar.propTypes = {
  user: PropTypes.object,
}

export default Avatar;