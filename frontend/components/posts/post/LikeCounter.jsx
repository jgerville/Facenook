import React from 'react'
import PropTypes from 'prop-types'

const LikeCounter = ({ likes }) => {
  return (
    <div className="like-counter">
      { likes.length > 0 ? (
        <div className="like-counts">
          <i className="fas fa-thumbs-up" />
          <span>{likes.length}</span>
        </div>
      ) : null}
    </div>
  )
}

LikeCounter.propTypes = {
  likes: PropTypes.array.isRequired,
}

export default LikeCounter
