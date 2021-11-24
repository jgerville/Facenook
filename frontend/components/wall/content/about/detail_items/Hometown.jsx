import React from 'react'
import PropTypes from 'prop-types'

const Hometown = ({ hometown }) => (
  <>
    {hometown ? (
      <>
        <i className="fas fa-map-marker-alt" />
        From {wallOwner.hometown} 
      </>
    ) : (
      <>
        <i className="fas fa-map-marker-alt" />
        No hometown info to show
      </>
    )}
  </>
)

Hometown.propTypes = {
  hometown: PropTypes.string,
}

export default Hometown;