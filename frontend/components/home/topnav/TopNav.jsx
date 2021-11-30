import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AccountDropdownContainer from "./account_dropdown_container";
import HomeAndSearchContainer from "./home_and_search_container";

const TopNav = ({ currentUser, dropdown, openDropdown, closeDropdown }) => {
  const [isActive, setIsActive] = useState(false);

  const openDropDown = (e) => {
    openDropdown("account");
    setIsActive(true);
  }

  const closeDropDown = (e) => {
    closeDropdown();
    setIsActive(false);
  }

  const toggleDropDown = () => {
    dropdown ? closeDropDown() : openDropDown()
  }

  return (
    <nav className="top-nav">
      <ul>
        <li>
          <HomeAndSearchContainer />
        </li>
        <li>
          <Link to="/2">user2</Link>
        </li>
        <li className="user-link">
          <a href="#">{currentUser.fname}</a>
        </li>
        <li>
          <div className={isActive ? "badge active" : "badge"} onClick={toggleDropDown}>
            <i className="fas fa-caret-down"/>
          </div>
          {dropdown === "account" ? <AccountDropdownContainer close={closeDropDown} currentUser={currentUser} /> : null}
        </li>
      </ul>
    </nav>
  );
};

TopNav.propTypes = {
  currentUser: PropTypes.object.isRequired,
}

export default TopNav;