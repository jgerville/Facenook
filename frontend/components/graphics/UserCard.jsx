import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FormattedTime from "./FormattedTime";

const UserCard = ({ user, time, editedAt }) => (
  <div className="user-card">
    <Avatar user={user} />
    <div className="name-and-time">
      <h4>
        {user.fname} {user.lname}
      </h4>
      {time && <FormattedTime postTime={time} editTime={editedAt} />}
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.string,
  editedAt: PropTypes.string,
};

export default UserCard;
