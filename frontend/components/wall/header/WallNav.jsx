import React from "react";
import { NavLink } from "react-router-dom";
import WallNavButtonsContainer from "./wall_nav_buttons_container";

const WallNav = () => (
  <nav className="wall-nav">
    <ul className="wall-nav-links">
      <li>
        <NavLink end to="">Posts</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="friends">Friends</NavLink>
      </li>
    </ul>
    <WallNavButtonsContainer />
  </nav>
);

export default WallNav;