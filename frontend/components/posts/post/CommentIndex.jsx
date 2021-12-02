import React from 'react'
import PropTypes from 'prop-types'
import ComposeComment from './ComposeComment'

const CommentIndex = ({ parentPost, posts, users }) => {
  return (
    <div className="comment-index">
      <ComposeComment parentPost={parentPost} />
    </div>
  )
}

CommentIndex.propTypes = {
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
}

export default CommentIndex
