import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FriendButton from "./FriendButton";

const WallNavButtons = ({
  getRelatedFriendReqs,
  wallOwner,
  params,
  friendreqs,
  currentUser,
  sendFriendRequest,
  unfriend,
  isMine,
  acceptFriendRequest,
}) => {
  useEffect(
    () => {
      getRelatedFriendReqs(wallOwner.id);
    },
    [params.userId],
    [friendreqs],
  );

  return (
    <ul className="wall-nav-buttons">
      {isMine ? null : (
        <>
          <li>
            <FriendButton
              friendreqs={friendreqs}
              currentUser={currentUser}
              user={wallOwner}
              sendFriendRequest={sendFriendRequest}
              unfriend={unfriend}
              acceptFriendRequest={acceptFriendRequest}
            />
          </li>
          {/* <li>
            <button className="message-button">
              <i className="fas fa-comment-dots"></i>Message
            </button>
          </li> */}
        </>
      )}
      {/* <li>
        <button>...</button>
      </li> */}
    </ul>
  );
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
};

export default WallNavButtons;
