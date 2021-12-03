import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PostIndexItem from '../post/PostIndexItem'

const PostIndex = ({ posts, users, currentUser, getPosts, getUsers, params, clearPosts, type }) => {
  const [usersFetched, setUsersFetched] = useState(false);
  
  useEffect(() => {
    clearPosts();
    if (type === "newsfeed") {
      getPosts(currentUser.friends).then(() => {
        console.log(getUserIdsFromPosts(posts))
        getUsers(getUserIdsFromPosts(posts)).then(() => setUsersFetched(true));
      })
    } else {
      getPosts().then((res) => getUsers(getUserIdsFromPosts(res)));
    }
  }, [])

  const getUserIdsFromPosts = (postsObj) => {
    const ids = [];
    for (const postId in postsObj) {
      ids.push(postsObj[postId].authorId)
      ids.push(postsObj[postId].wallId)
    }
    console.log(postsObj)
    console.log("here are the ids in array", ids)
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

  const isOnFriendsList = currentUser.friends.includes(Number(params.userId)) || currentUser.id === Number(params.userId)

  console.log(posts)
  console.log(users)
  console.log(type)
  
  return (
    <div className="post-index">
      <div className="header-container">
        Posts
      </div>
      { (isOnFriendsList || type==="newsfeed") && usersFetched ? (
        <div className="post-items-container">
          {posts && sortedPosts.map((post) => <PostIndexItem key={post.id} post={post} user={users[post.authorId]} />)}
        </div>
        // null
      ) : (
        <div className="posts-hidden">
          No posts available
        </div>
      )}
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
  type: PropTypes.string.isRequired,
}



export default PostIndex;