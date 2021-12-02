import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../graphics/Avatar'
import CommentBody from './CommentBody'
import CommentFooter from './CommentFooter'
import CommentLikeIcon from './CommentLikeIcon'
import CommentIndexContainer from './comment_index_container'
import ComposeCommentContainer from './compose_comment_container'

const CommentIndexItem = ({ comment, author }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => setShowReplies(prev => !prev);
  const revealReplies = () => setShowReplies(true);

  return (
    <div className="comment-index-item-container">
      <div className="comment-index-item">
        <div className="comment-top">
          <Avatar user={author} />
          <CommentBody body={comment.body} author={author} />
        </div>
        <div className="comment-bottom">
          <CommentFooter comment={comment} toggleReplies={toggleReplies} />
          <CommentLikeIcon comment={comment} />
        </div>
      </div>
      {showReplies &&  (
        <>
          <CommentIndexContainer parentPost={comment} postIds={comment.childPosts} />
          <ComposeCommentContainer parentPost={comment} showComments={revealReplies} /> 
        </>
      )}
    </div>
  )
}

CommentIndexItem.propTypes = {
  comment: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
}

export default CommentIndexItem
