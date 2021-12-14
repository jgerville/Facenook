import React from 'react'
import PropTypes from 'prop-types'
import FormattedTime from '../../graphics/FormattedTime'
import LikeButton from '../../graphics/LikeButton'

const CommentFooter = ({ comment, toggleReplies, disableReply }) => {
  return (
    <div className="comment-footer">
      {/* <span className="like-button">Like</span> */}
      <LikeButton post={comment} showIcon={false} />
      <span className="dot">·</span>
      {disableReply ? (
        null
      ) : (
        <>
          <span className="reply-button" onClick={toggleReplies}>Reply</span>
          <span className="dot">·</span>
        </>
      )}
      
      {comment && <FormattedTime postTime={comment.createdAt} isComment={true} />}
    </div>
  )
}

CommentFooter.propTypes = {
  comment: PropTypes.object.isRequired,
  toggleReplies: PropTypes.func.isRequired,
  disableReply: PropTypes.bool,
}

export default CommentFooter
