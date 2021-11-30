import React from 'react'
import PropTypes from 'prop-types'
import SearchUserCard from './SearchUserCard';
import SearchFriendCard from './SearchFriendCard';

const SearchResults = ({ results, friendIds, close }) => {
  const orderedResults = [];
  for (const id in results) {
    // console.log("friendIds: " + friendIds)
    if (friendIds.includes(Number(id))) {
      orderedResults.unshift(results[id]);
    } else {
      orderedResults.push(results[id]);
    }
  }

  console.log(orderedResults);
  
  return (
    <div className="search-results">
      {orderedResults.map((user) => (
        friendIds.includes(user.id) ? (
          <SearchFriendCard key={user.id} user={user} close={close} />
        ) : (
          <SearchUserCard key={user.id} user={user} close={close} />
        )
      ))}
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.object.isRequired,
  friendIds: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
}

export default SearchResults;