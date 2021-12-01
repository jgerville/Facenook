import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'

const PostIndexItem = ({ post, user }) => {
  return (
    <div className="post-index-item">
      <PostHeader post={post} user={user} />
    </div>
  )
}

PostIndexItem.propTypes = {
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default PostIndexItem;