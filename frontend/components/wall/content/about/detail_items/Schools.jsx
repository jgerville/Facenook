import React from 'react'
import PropTypes from 'prop-types'

const Schools = ({ schools, isMine }) => (
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
          {isMine ? <i className="fas fa-plus" /> : <i className="fas fa-graduation-cap" />}
        </th>
        <td>
          {isMine ? <>Add a school</> : <>No education info to show</>}
        </td>
      </>
    )}
  </tr>
)

Schools.propTypes = {
  schools: PropTypes.string,
  isMine: PropTypes.bool,
}

export default Schools
