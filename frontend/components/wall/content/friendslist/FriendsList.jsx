import React from 'react'
import PropTypes from 'prop-types'
import FriendsHeader from './FriendsHeader'
import FriendsListIndex from './FriendsListIndex'

const FriendsList = ({ wallOwner }) => {
  return (
    <div className="friends-list">
      <FriendsHeader />
      <FriendsListIndex friends={wallOwner.friends} />
    </div>
  )
}

FriendsList.propTypes = {
  wallOwner: PropTypes.object.isRequired,
}

export default FriendsList
