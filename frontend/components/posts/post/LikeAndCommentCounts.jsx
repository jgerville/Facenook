import React from 'react'
import PropTypes from 'prop-types'
import CommentCounter from './CommentCounter'

const LikeAndCommentCounts = ({ post, toggleComments }) => {
  return (
    <div className="like-and-comment-counts">
      <div className="like-counts">
        {/* replace this div with a component. */}
      </div>
      <CommentCounter post={post} toggle={toggleComments} />
    </div>
  )
}

LikeAndCommentCounts.propTypes = {
  post: PropTypes.object.isRequired,
  toggleComments: PropTypes.func.isRequired,
}

export default LikeAndCommentCounts
