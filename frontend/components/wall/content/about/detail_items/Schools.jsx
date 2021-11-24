import React from 'react'
import PropTypes from 'prop-types'

const Schools = ({ schools }) => (
  <tr>
    {schools ? (
      <>
        <th>
          <i className="fas fa-graduation-cap" />
        </th>
        <td>
          Studied at {schools}
        </td>
      </>
    ) : (
      <>
        <th>
          <i className="fas fa-graduation-cap" />
        </th>
        <td>
          No education info to show
        </td>
      </>
    )}
  </tr>
)

Schools.propTypes = {
  schools: PropTypes.string,
}

export default Schools
