import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "../../graphics/Avatar";

const DropDownUserCard = ({ user, close }) => {
  return (
    <div className="user-card" onClick={() => close()}>
      <Link to={`/${user.id}`}>
        <Avatar user={user} />
        <div className="text">
          <h4>{user.fname} {user.lname}</h4>
          <p>See your profile</p>
        </div>
      </Link>
    </div>
  );
};

DropDownUserCard.propTypes = {
  user: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default DropDownUserCard;
