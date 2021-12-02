import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostButtons from './PostButtons'
import LikeAndCommentCounts from './LikeAndCommentCounts'
import ComposeCommentContainer from './compose_comment_container'

const PostIndexItem = ({ post, user }) => {
  return (
    <div className="post-index-item">
      <PostHeader post={post} user={user} />
      <PostContent body={post.body} />
      <LikeAndCommentCounts post={post} />
      <PostButtons />
      <ComposeCommentContainer parentPost={post} />
    </div>
  )
}

PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default PostIndexItem;