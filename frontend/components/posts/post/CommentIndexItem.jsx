import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../graphics/Avatar'
import CommentBody from './CommentBody'
import CommentFooter from './CommentFooter'
import CommentLikeIcon from './CommentLikeIcon'
import CommentIndexContainer from './comment_index_container'
import ComposeCommentContainer from './compose_comment_container'
import EditCommentContainer from './edit_comment_container'
import EditAndDeleteButtonsContainerComment from './edit_and_delete_buttons_container_comment'
import EditAndDeleteButtons from './EditAndDeleteButtons'

const CommentIndexItem = ({ comment, author, parent, posts }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyCounter, setShowReplyCounter] = useState(true);
  const [editing, setEditing] = useState(false);

  const startEditing = () => setEditing(true);
  const stopEditing = () => setEditing(false);

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
          {editing ? (
            <EditCommentContainer comment={comment} stopEditing={stopEditing} hideReplyCounter={hideReplyCounter} />
          ) : (
            <>
              <Avatar user={author} />
              <CommentBody body={comment.body} author={author} />
              <EditAndDeleteButtonsContainerComment comment={comment} startEditing={startEditing} />
              {/* <EditAndDeleteButtons comment={comment} startEditing={startEditing} /> */}
            </>
          )}
        </div>
        <div className="comment-bottom">
          {editing ? null : (
            <>
              <CommentFooter comment={comment} toggleReplies={toggleReplies} disableReply={isNested}/>
              <CommentLikeIcon comment={comment} />
            </>
          )}
        </div>
      </div>
      {hasChildren && showReplyCounter && !showReplies && (
        <div className="reply-counter" onClick={handleClickOnReplyCounter}>
          <i className="fas fa-reply"/>
          <span className="reply-counts">{childCount} {replyWord}</span>
        </div>
      )}
      {showReplies && !isNested && (
        <>
          <CommentIndexContainer parentPost={comment} />
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
