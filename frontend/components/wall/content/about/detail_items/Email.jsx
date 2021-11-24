import React from 'react'
import PropTypes from 'prop-types'

const Email = ({ email }) => (
  <tr>
    <th>
      <i className="far fa-envelope" />
    </th>
    <td>
      {email}
    </td>
  </tr>
)

Email.propTypes = {
  email: PropTypes.string,
}

export default Email;