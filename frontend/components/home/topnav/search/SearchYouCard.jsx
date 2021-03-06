import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "../../../graphics/Avatar";


const SearchYouCard = ({ user, close }) => {
  return (
    <div className="search-friend-card">
      <Link to={`/${user.id}`} onClick={close}>
        <Avatar user={user} />
        <div className="text">
          <h4>
            {user.fname} {user.lname}
          </h4>
          <p>You</p>
        </div>
      </Link>
    </div>
  );
};

SearchYouCard.propTypes = {
  user: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default SearchYouCard;