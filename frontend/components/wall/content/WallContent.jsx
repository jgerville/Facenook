import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro';

function WallContent({ wallOwner }) {
  return (
    <div className="wall-content">
      <Intro wallOwner={wallOwner} />
    </div>
  )
}

WallContent.propTypes = {
  wallOwner: PropTypes.object.isRequired,
}

export default WallContent

