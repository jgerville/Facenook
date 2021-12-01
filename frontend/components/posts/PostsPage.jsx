import React from 'react'
import PropTypes from 'prop-types'
import CreatePost from './creation/CreatePost'

const PostsPage = ({ wallOwner, currentUser }) => {
  return (
    <div>
      <CreatePost wallOwner={wallOwner} currentUser={currentUser} />
    </div>
  )
}

PostsPage.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
}

export default PostsPage
