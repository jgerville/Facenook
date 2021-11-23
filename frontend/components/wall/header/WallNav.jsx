import React from "react";
import WallNavButtons from "./WallNavButtons";
import { NavLink } from "react-router-dom";

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
    <WallNavButtons />
  </nav>
);

export default WallNav;