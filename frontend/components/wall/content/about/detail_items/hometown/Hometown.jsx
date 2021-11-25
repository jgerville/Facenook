import React from 'react'
import PropTypes from 'prop-types'

const Hometown = ({ hometown, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <tr onClick={edit}>
          <th><i className="fas fa-plus" /></th>
          <td><span>Add your hometown</span></td>
        </tr>
        {hometown && (
          <tr>
            <th>
              <i className="fas fa-map-marker-alt" />
            </th>
            <td>From {hometown}</td>
          </tr>
        )}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {hometown ? (
          <tr>
            <th>
              <i className="fas fa-map-marker-alt" />
            </th>
            <td>From {hometown}</td>
          </tr>
        ) : (
          <tr>
            <th><i className="fas fa-map-marker-alt" /></th>
            <td>No hometown info to show</td>
          </tr>
        )}
      </>
    )}
  </>
)

Hometown.propTypes = {
  hometown: PropTypes.string,
  isMine: PropTypes.bool.isRequired,
  edit: PropTypes.func,
}

export default Hometown;