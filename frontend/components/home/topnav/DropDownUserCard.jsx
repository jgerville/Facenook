import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DropDownUserCard = ({ user }) => {
  return (
    <div className="user-card" onClick={close()}>
      <Link to={`/${user.id}`}>
        {/* avatar goes here */}
        <div className="text">
          <h4>{user.fname} {user.lname}</h4>
          <p>See your profile</p>
        </div>
      </Link>
    </div>
  );
};

DropDownUserCard.propTypes = {};

export default DropDownUserCard;
