import React from "react";
import WallNavButtons from "./WallNavButtons";
import { Routes, Route, NavLink } from "react-router-dom";

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
        <a href="#">Friends</a>
      </li>
    </ul>
    <WallNavButtons />
  </nav>
);

export default WallNav;