import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ query, updateQuery }) => {
  return (
    <div className="search">
      <input
        type="search"
        value={query}
        onChange={updateQuery}
      />
    </div>
  )
}


Search.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
}

export default Search
