import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopNav = ({ currentUser }) => {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <a href="#">test</a>
        </li>
        <li>
          <Link to="/2">user2</Link>
        </li>
        <li className="user-link">
          <a href="#">{currentUser.fname}</a>
        </li>
        <li>
          <a href="#">
            <div className="badge">
              <i className="fas fa-caret-down"></i>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  currentUser: PropTypes.object.isRequired,
}

export default TopNav;