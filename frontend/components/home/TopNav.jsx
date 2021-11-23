import React from "react";
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
          <a href="#">4</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;