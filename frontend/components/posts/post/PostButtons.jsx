import React from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../../graphics/LikeButton'
import CommentButton from '../../graphics/CommentButton'

const PostButtons = ({ toggleComments }) => {
  return (
    <div className="post-buttons">
      <LikeButton />
      <CommentButton toggleComments={toggleComments} />
    </div>
  )
}

PostButtons.propTypes = {
  toggleComments: PropTypes.func.isRequired,
}

export default PostButtons
