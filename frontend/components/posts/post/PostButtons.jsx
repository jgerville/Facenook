import React from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../../graphics/LikeButton'
import CommentButton from '../../graphics/CommentButton'

const PostButtons = ({ toggleComments, post }) => {
  return (
    <div className="post-buttons">
      <LikeButton post={post} showIcon={true} />
      <CommentButton toggleComments={toggleComments} />
    </div>
  )
}

PostButtons.propTypes = {
  toggleComments: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

export default PostButtons
