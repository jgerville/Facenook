import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CreatePostContainer from './creation/create_post_container'
import PostIndexContainerForWall from './index/post_index_container_wall';

const PostsPage = ({ wallOwner, currentUser }) => {
  const isMine = wallOwner.id === currentUser.id;

  return (
    <div className="posts-page">
      <CreatePostContainer wallOwner={wallOwner} currentUser={currentUser} />
      <PostIndexContainerForWall />
    </div>
  )
}

PostsPage.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
}

export default PostsPage
