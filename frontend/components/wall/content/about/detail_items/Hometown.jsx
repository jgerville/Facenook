import React from 'react'
import PropTypes from 'prop-types'

const Hometown = ({ hometown }) => (
  <tr>
    {hometown ? (
      <>
        <th>
          <i className="fas fa-map-marker-alt" />
        </th>
        <td>
          From {wallOwner.hometown} 
        </td>
      </>
    ) : (
      <>
        <th>
          <i className="fas fa-map-marker-alt" />
        </th>
        <td>
          No hometown info to show
        </td>
      </>
    )}
  </tr>
)

Hometown.propTypes = {
  hometown: PropTypes.string,
}

export default Hometown;