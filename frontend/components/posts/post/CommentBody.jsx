import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LikeCounter from './LikeCounter'

const CommentBody = ({ body, author, likes }) => {
  return (
    <div className="post-content">
      <h4>
        <Link to={`/${author.id}`}>
          {author.fname} {author.lname}    
        </Link>
      </h4>
      <p className="post-body">{body}</p>
      <LikeCounter likes={likes} />
    </div>
  )
}

CommentBody.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  likes: PropTypes.array.isRequired,
}

export default CommentBody
