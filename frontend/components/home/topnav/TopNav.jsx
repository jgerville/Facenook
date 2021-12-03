import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AccountDropdownContainer from "./dropdown/account_dropdown_container";
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
      </ul>
      <ul className="middle-links">
        <li className="home-link">
          <NavLink to="/">
            <i className="fas fa-home" />
          </NavLink>
        </li>
        <li className="gh-link">
          <a href="https://github.com/jgerville"><i className="fab fa-github"></i></a>
        </li>
        <li className="flower-link">
          <a href="https://flower-type.herokuapp.com/"><i className="fas fa-gamepad"></i></a>
        </li>
      </ul>
      <ul className="dropdown-container">
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