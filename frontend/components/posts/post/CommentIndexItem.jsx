import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../graphics/Avatar'
import CommentBody from './CommentBody'

const CommentIndexItem = ({ comment, author }) => {
  return (
    <div className="comment-index-item">
      <div className="comment-top">
        <Avatar user={author} />
        <CommentBody body={comment.body} author={author} />
      </div>
      <div className="comment-bottom">
        {/* todo: like button + 11h/5d/1w/1m/2y time */}
      </div>
    </div>
  )
}

CommentIndexItem.propTypes = {
  comment: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}

export default CommentIndexItem
