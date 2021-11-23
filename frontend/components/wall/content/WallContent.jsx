import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro';

const WallContent = ({ wallOwner }) => (
  <main className="wall-content">
    <div className="side-content">
      <Intro wallOwner={wallOwner} />
    </div>
    <div className="post-placeholder"></div>
  </main>
)

WallContent.propTypes = {
  wallOwner: PropTypes.object.isRequired,
}

export default WallContent

