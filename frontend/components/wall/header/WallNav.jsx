import React from "react";
import WallNavButtons from "./WallNavButtons";

const WallNav = () => (
  <nav className="wall-nav">
    <ul className="wall-nav-links">
      <li>
        <a href="#">Posts</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Friends</a>
      </li>
    </ul>
    <WallNavButtons />
  </nav>
);

export default WallNav;