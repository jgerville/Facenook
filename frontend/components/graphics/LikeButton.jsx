import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createLike, deleteLike } from '../../actions/like_actions'

const LikeButton = ({ post, likes, like, unlike, currentUserId }) => {
  const [likeObj, setLikeObj] = useState(null)

  useEffect(() => {
    likedByUser();
  }, [post, likes])


  const handleClick = () => {
    if (likeObj) {
      unlike(likeObj.id)
    } else {
      const likeData = {
        user_id: currentUserId,
        post_id: post.id,
        kind: 0,
      }
      like(likeData);
    }
  }
  
  const likedByUser = () => {
    if (likes) {
      for (const eachLikeId of post.likes) {
        if (likes[eachLikeId].userId == currentUserId) {
            setLikeObj(likes[eachLikeId]);
            return;
        }
      }
    }
    setLikeObj(null);
    return;
  }

  return (
    <div className="like button-container">
      <button className={`like-button`} onClick={handleClick}>
        <i className="far fa-thumbs-up" />
        <span>Like</span>
      </button>
    </div>
  )
}

LikeButton.propTypes = {
  post: PropTypes.object.isRequired,
  likes: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  unlike: PropTypes.func.isRequired,
  currentUserId: PropTypes.number.isRequired,
}

const mapStateToProps = ({ entities: { likes }, session }) => ({
  currentUserId: session.id,
  likes,
})

const mapDispatchToProps = dispatch => ({
  like: (like) => dispatch(createLike(like)),
  unlike: (likeId) => dispatch(deleteLike(likeId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);