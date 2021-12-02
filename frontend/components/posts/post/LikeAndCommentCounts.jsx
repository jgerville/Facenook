import React from 'react'
import PropTypes from 'prop-types'
import CommentCounter from './CommentCounter'

const LikeAndCommentCounts = ({ post }) => {
  return (
    <div className="like-and-comment-counts">
      <div className="like-counts">
        {/* replace this div with a component. */}
      </div>
      <CommentCounter post={post} />
    </div>
  )
}

LikeAndCommentCounts.propTypes = {

}

export default LikeAndCommentCounts
