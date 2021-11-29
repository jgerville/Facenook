import React, { useEffect } from "react";
import PropTypes from "prop-types";

const WallNavButtons = (props) => {
  useEffect(() => {

  }, [props.params.userId])

  return (
    <ul className="wall-nav-buttons">
      <li>
        <button><i className="fas fa-user-friends"/>Friends</button>
      </li>
      <li>
        <button className="message-button"><i className="fas fa-comment-dots"></i>Message</button>
      </li>
      <li>
        <button>...</button>
      </li>
    </ul>
  )
};

WallNavButtons.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
  friendreqs: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired,
  acceptFriendRequest: PropTypes.func.isRequired,
  unfriend: PropTypes.func.isRequired,
  getRelatedFriendReqs: PropTypes.func.isRequired,
}

export default WallNavButtons;