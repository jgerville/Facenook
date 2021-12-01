import React from 'react'
import PropTypes from 'prop-types'
import CreatePostContainer from './creation/create_post_container'

const PostsPage = ({ wallOwner, currentUser }) => {
  return (
    <div className="posts-page">
      <CreatePostContainer wallOwner={wallOwner} currentUser={currentUser} />
    </div>
  )
}

PostsPage.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
}

export default PostsPage
