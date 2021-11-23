import React from "react";

const WallNavButtons = () => (
  <ul className="wall-nav-buttons">
    <li>
      <button><i className="fas fa-user-friends"/>Friends</button>
    </li>
    <li>
      <button><i className="fas fa-comment-dots"></i>Message</button>
    </li>
    <li>
      <button>...</button>
    </li>
  </ul>
);

export default WallNavButtons;