import React from 'react'
import PropTypes from 'prop-types'

const FriendButton = ({friendreqs, currentUser, wallOwner, sendFriendRequest, unfriend, acceptFriendRequest}) => {

  const noRelationshipFound = Object.keys(friendreqs).length === 0
  const relationship = Object.values(friendreqs)[0] 
  const isPendingSent = relationship ? relationship.kind === "pending" && relationship.senderId === currentUser.id : null
  const isPendingReceived = relationship ? relationship.kind === "pending" && relationship.targetId === currentUser.id : null

  let handleClick, icon, buttonText;

  const addFriend = () => {
    sendFriendRequest({
      sender_id: currentUser.id,
      target_id: wallOwner.id,
    })
  };

  const removeFriend = () => {
    unfriend(Object.keys(friendreqs))
  }

  if (noRelationshipFound) {
    handleClick = addFriend;
    icon = "fa-user-plus";
    buttonText = "Add Friend";
  } else if (isPendingSent) {
    handleClick = removeFriend;
    icon = "fa-user-minus";
    buttonText = "Cancel Request";
  } else if (isPendingReceived) {
    // handleClick = openRespondDropdown;
    icon = "fa-user-plus";
    buttonText = "Respond"
  } else {
    // handleClick = openFriendsDropdown;
    icon = "fa-user-friends";
    buttonText = "Friends"
  }
  
  return (
    <button onClick={handleClick}>
      <i className={`fas ${icon}`} />
      {buttonText}
    </button>
  )
}

FriendButton.propTypes = {
  friendreqs: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired,
  unfriend: PropTypes.func.isRequired,
  acceptFriendRequest: PropTypes.func.isRequired,
}

export default FriendButton
