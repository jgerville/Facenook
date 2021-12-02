import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostButtons from './PostButtons'
import LikeAndCommentCounts from './LikeAndCommentCounts'

const PostIndexItem = ({ post, user }) => {
  return (
    <div className="post-index-item">
      <PostHeader post={post} user={user} />
      <PostContent body={post.body} />
      <LikeAndCommentCounts post={post} />
      <PostButtons />
    </div>
  )
}

PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default PostIndexItem;