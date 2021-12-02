import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PostIndexItem from '../post/PostIndexItem'

const PostIndex = ({ posts, users, currentUser, getPosts, getUsers, params, clearPosts }) => {
  useEffect(() => {
    clearPosts();
    getPosts().then((res) => getUsers(getUserIdsFromPosts(res)));
  }, [params.userId])

  const getUserIdsFromPosts = (postsObj) => {
    const ids = [];
    for (const postId in postsObj) {
      ids.push(postsObj[postId].authorId)
    }
    return ids
  }

  const postsArray = Object.values(posts)
  const topLevelPosts = [];
  const comments = [];
  for (let i = 0; i < postsArray.length; i++) {
    if (postsArray[i].parentPostId) {
      comments.push(postsArray[i]);
    } else {
      topLevelPosts.push(postsArray[i]);
    }
  }
  const sortedPosts = topLevelPosts.sort((a, b) => {
    return (new Date(b.createdAt) - new Date(a.createdAt));
  })
  
  return (
    <div className="post-index">
      <div className="header-container">
        Posts
      </div>
      <div className="post-items-container">
        {posts && sortedPosts.map((post) => <PostIndexItem key={post.id} post={post} user={users[post.authorId]} />)}
      </div>
    </div>
  )
}

PostIndex.propTypes = {
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  clearPosts: PropTypes.func.isRequired,
}



export default PostIndex;