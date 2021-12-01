import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostContent from './PostContent'

const PostIndexItem = ({ post, user }) => {
  return (
    <div className="post-index-item">
      <PostHeader post={post} user={user} />
      <PostContent body={post.body} />
    </div>
  )
}

PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default PostIndexItem;