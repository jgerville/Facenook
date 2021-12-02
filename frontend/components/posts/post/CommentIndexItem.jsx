import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../graphics/Avatar'
import CommentBody from './CommentBody'
import CommentFooter from './CommentFooter'
import CommentLikeIcon from './CommentLikeIcon'
import CommentIndexContainer from './comment_index_container'
import ComposeCommentContainer from './compose_comment_container'

const CommentIndexItem = ({ comment, author, parent, posts }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyCounter, setShowReplyCounter] = useState(true);

  const revealReplyCounter = () => setShowReplyCounter(true);
  const hideReplyCounter = () => setShowReplyCounter(false);

  const toggleReplies = () => setShowReplies(prev => !prev);
  const revealReplies = () => setShowReplies(true);

  const childCount = comment.childPosts.length;
  const hasChildren = childCount > 0;
  const replyWord = childCount === 1 ? "Reply" : "Replies"
  const isNested = posts[parent.parentPostId] !== undefined

  const handleClickOnReplyCounter = () => {
    hideReplyCounter();
    revealReplies();
  }

  return (
    <div className="comment-index-item-container">
      <div className="comment-index-item">
        <div className="comment-top">
          <Avatar user={author} />
          <CommentBody body={comment.body} author={author} />
        </div>
        <div className="comment-bottom">
          <CommentFooter comment={comment} toggleReplies={toggleReplies} disableReply={isNested}/>
          <CommentLikeIcon comment={comment} />
        </div>
      </div>
      {hasChildren && showReplyCounter && (
        <div className="reply-counter" onClick={handleClickOnReplyCounter}>
          <i className="fas fa-reply"/>
          <span className="reply-counts">{childCount} {replyWord}</span>
        </div>
      )}
      {showReplies && !isNested && (
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
  parent: PropTypes.object.isRequired,
}

export default CommentIndexItem
