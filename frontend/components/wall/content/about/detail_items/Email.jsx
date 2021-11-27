import React from 'react'
import PropTypes from 'prop-types'

const Email = ({ email }) => (
  <div className="detail-item">
      <i className="far fa-envelope" />
      <span>{email}</span>
  </div>
)

Email.propTypes = {
  email: PropTypes.string,
}

export default Email;