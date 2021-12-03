import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createLike, deleteLike } from '../../actions/like_actions'

const LikeButton = ({ post, likes, like, unlike, currentUserId }) => {
  useEffect(() => {
    likedByUser();
  }, [post, likes])

  const [liked, setLiked] = useState("not-liked")
  const [likeId, setLikeId] = useState(null)

  const handleClick = () => {
    if (likeId) {
      unlike(likeId)
      // setLiked("not-liked")
    } else {
      const likeData = {
        user_id: currentUserId,
        post_id: post.id,
        kind: 0,
      }
      like(likeData);
      // setLiked("liked")
    }
  }
  
  const likedByUser = () => {
    for (const eachLikeId of post.likes) {
      if (likes.indexOf(eachLikeId > -1)) {
        if (likes[likes.indexOf(eachLikeId)].userId === currentUserId) {
          setLiked("liked");
          setLikeId(eachLikeId)
          return;
        }
      }
    }
    setLiked("not-liked");
    return;
  }

  return (
    <div className="like button-container">
      <button className={`like-button ${liked}`} onClick={handleClick}>
        <i className="far fa-thumbs-up" />
        <span>Like</span>
      </button>
    </div>
  )
}

LikeButton.propTypes = {
  post: PropTypes.object.isRequired,
  likes: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
}

const mapStateToProps = ({ entities: { likes }, session }) => ({
  currentUserId: session.id,
  likes: Object.values(likes),
})

const mapDispatchToProps = dispatch => ({
  like: (like) => dispatch(createLike(like)),
  unlike: (likeId) => dispatch(deleteLike(likeId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);