import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import UserCard from '../../../graphics/UserCard';
import { connect } from 'react-redux';
import { getSomeUsers } from '../../../../actions/user_actions';

const FriendsListIndex = ({ users, friends, getFriends }) => {
  const hasFriends = friends.length > 0;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getFriends(friends).then(() => setReady(true));
  }, [])
  
  return (
    <main className="friends-index">
      {ready && hasFriends && friends.map((friendId) => (
        <div key={friendId} className="friend-index-item">
          <UserCard key={friendId} user={users[friendId]} />
        </div>
      ))}
    </main>
  )
}

FriendsListIndex.propTypes = {
  users: PropTypes.object.isRequired,
  friends: PropTypes.array.isRequired,
}

const mapStateToProps = ({ entities: { users } }) => ({
  users,
})

const mapDispatchToProps = (dispatch) => ({
  getFriends: (ids) => dispatch(getSomeUsers(ids)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListIndex);