import React from 'react'
import PropTypes from 'prop-types'
import CommentIndexItem from './CommentIndexItem';

const CommentIndex = ({ parentPost, posts, users, postIds }) => {
  const comments = postIds.map((id) => posts[id]);
  const sortedComments = comments.sort((a, b) => {
    return (new Date(a.createdAt) - new Date(b.createdAt));
  })

  return (
    <div className="comment-index">
      {sortedComments && sortedComments.map((comment) => (
        <CommentIndexItem posts={posts} parent={parentPost} key={comment.id} comment={comment} author={users[comment.authorId]} />
      ))}
    </div>
  )
}

CommentIndex.propTypes = {
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  parentPost: PropTypes.object.isRequired,
  postIds: PropTypes.array.isRequired,
}

export default CommentIndex
