import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FriendButton = ({friendreqs, currentUser, user, sendFriendRequest, unfriend, acceptFriendRequest}) => {

  const noRelationshipFound = Object.keys(friendreqs).length === 0
  const relationship = Object.values(friendreqs)[0] 
  const isPendingSent = relationship ? relationship.kind === "pending" && relationship.senderId === currentUser.id : null
  const isPendingReceived = relationship ? relationship.kind === "pending" && relationship.targetId === currentUser.id : null

  const [respondDropdown, setRespondDropdown] = useState(false);
  const [friendsDropdown, setFriendsDropdown] = useState(false);

  let handleClick, icon, buttonText, close;

  console.log(Object.values(friendreqs))

  const addFriend = () => {
    sendFriendRequest({
      sender_id: currentUser.id,
      target_id: user.id,
    })
  };

  const removeFriend = () => {
    unfriend(Object.keys(friendreqs)[0])
  }

  const removeFriendAndClose = () => {
    close();
    unfriend(Object.keys(friendreqs)[0])
  }

  const confirmFriend = () => {
    close();
    acceptFriendRequest(Object.values(friendreqs)[0]);
  }

  const openRespondDropdown = () => setRespondDropdown(true);
  const closeRespondDropdown = () => setRespondDropdown(false);

  const openFriendsDropdown = () => setFriendsDropdown(true);
  const closeFriendsDropdown = () => setFriendsDropdown(false);

  if (noRelationshipFound) {
    handleClick = addFriend;
    icon = "fa-user-plus";
    buttonText = "Add Friend";
  } else if (isPendingSent) {
    handleClick = removeFriend;
    icon = "fa-user-minus";
    buttonText = "Cancel Request";
  } else if (isPendingReceived) {
    handleClick = openRespondDropdown;
    icon = "fa-user-plus";
    buttonText = "Respond";
    close = closeRespondDropdown;
  } else {
    handleClick = openFriendsDropdown;
    icon = "fa-user-friends";
    buttonText = "Friends"
    close = closeFriendsDropdown;
  }
  
  return (
    <>
      <button onClick={handleClick}>
        <i className={`fas ${icon}`} />
        {buttonText}
      </button>
      {respondDropdown && (
        <div className="panel">
          <button onClick={confirmFriend}>Confirm</button>
          <button onClick={removeFriendAndClose}>Delete request</button>
        </div>
      )}
      {friendsDropdown && (
        <div className="panel">
          <button onClick={removeFriend}>Unfriend</button>
        </div>
      )}
    </>
  )
}

FriendButton.propTypes = {
  friendreqs: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired,
  unfriend: PropTypes.func.isRequired,
  acceptFriendRequest: PropTypes.func.isRequired,
}

export default FriendButton
