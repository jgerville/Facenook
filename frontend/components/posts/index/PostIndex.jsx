import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const PostIndex = ({ posts, users, currentUser, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [])

  const postsArray = Object.values(posts)
  console.log(postsArray)
  const sortedPosts = postsArray.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  })
  console.log(sortedPosts)
  
  return (
    <div className="post-index">
      <div className="header-container">
        Posts
      </div>
      <div className="post-items-container">
        <div className="post-index-item">
          Blah! Boo!
        </div>
      </div>
    </div>
  )
}

PostIndex.propTypes = {
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
}



export default PostIndex;