import React from 'react'
import PropTypes from 'prop-types'
import SearchUserCard from './SearchUserCard';
import SearchFriendCard from './SearchFriendCard';
import SearchYouCard from './SearchYouCard';

const SearchResults = ({ results, friendIds, close, youId }) => {
  const orderedResults = [];
  for (const id in results) {
    if (friendIds.includes(Number(id))) {
      orderedResults.unshift(results[id]);
    } else {
      orderedResults.push(results[id]);
    }
  }

  return (
    <div className="search-results">
      {orderedResults.map((user) => (
        // if it's you
        user.id === youId ? (
          <SearchYouCard key={user.id} user={user} close={close} />
        ) : (
          friendIds.includes(user.id) ? (
            // if it's a friend
            <SearchFriendCard key={user.id} user={user} close={close} />
          ) : (
            // else:
            <SearchUserCard key={user.id} user={user} close={close} />
          )
        )
      ))}
      {orderedResults.length === 0 && <div className="failure-card"><p>No users found</p></div> }
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
  friendIds: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  youId: PropTypes.number.isRequired,
}

export default SearchResults;