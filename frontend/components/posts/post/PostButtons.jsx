import React from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../../graphics/LikeButton'
import CommentButton from '../../graphics/CommentButton'

const PostButtons = props => {
  return (
    <div className="post-buttons">
      <LikeButton />
      <CommentButton />
    </div>
  )
}

PostButtons.propTypes = {

}

export default PostButtons
