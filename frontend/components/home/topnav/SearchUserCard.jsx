import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchUserCard = ({ user, close }) => {
  return (
    <div className="search-user-card">
      <Link to={`/${user.id}`} onClick={() => close}>
        <div className="icon-container">
          <i className="fas fa-search" />
        </div>
        <div className="text">
          <h4>
            {user.fname} {user.lname}
          </h4>
        </div>
      </Link>
    </div>
  );
};

SearchUserCard.propTypes = {
  user: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default SearchUserCard;