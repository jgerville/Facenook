import React from 'react'
import PropTypes from 'prop-types'
import FormattedTime from '../../graphics/FormattedTime'

const CommentFooter = ({ comment, toggleReplies }) => {
  return (
    <div className="comment-footer">
      <span className="like-button">Like</span>
      <span className="dot">·</span>
      <span className="reply-button" onClick={toggleReplies}>Reply</span>
      <span className="dot">·</span>
      {comment && <FormattedTime postTime={comment.createdAt} isComment={true} />}
    </div>
  )
}

CommentFooter.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleReplies: PropTypes.func.isRequired,
}

export default CommentFooter
