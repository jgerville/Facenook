import React from 'react'
import PropTypes from 'prop-types'
import CommentIndexItem from './CommentIndexItem';

const CommentIndex = ({ parentPost, posts, users,  }) => {
  let sortedComments;
  
  if (parentPost.childPosts) {
    const comments = parentPost.childPosts.map((id) => posts[id]);
    sortedComments = comments.sort((a, b) => {
      return (new Date(a.createdAt) - new Date(b.createdAt));
    })
  }

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
}

export default CommentIndex
