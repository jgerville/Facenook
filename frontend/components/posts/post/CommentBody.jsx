import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CommentBody = ({ body, author }) => {
  return (
    <div className="post-content">
      <h4>
        <Link to={`/${author.id}`}>
          {author.fname} {author.lname}    
        </Link>
      </h4>
      <p className="post-body">{body}</p>
    </div>
  )
}

CommentBody.propTypes = {
  body: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
}

export default CommentBody
