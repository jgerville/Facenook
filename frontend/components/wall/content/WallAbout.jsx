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

}

export default WallAbout
