import React from 'react'
import PropTypes from 'prop-types'

const WallAbout = ({wallOwner, isMine}) => {
  return (
    <div className="wall-about">
      <h3>About</h3>
      <h1>We're in the about page!</h1>
    </div>
  )
}

WallAbout.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
}

export default WallAbout