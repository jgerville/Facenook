import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <Avatar user={user} />
      <h4>{user.fname} {user.lname}</h4>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
  }).isRequired,
}

export default UserCard;