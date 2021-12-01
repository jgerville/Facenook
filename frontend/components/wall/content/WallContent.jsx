import React from 'react';
import PropTypes from 'prop-types';
import Intro from './Intro';
import PostsPage from '../../posts/PostsPage';

const WallContent = ({ wallOwner, currentUser }) => (
  <main className="wall-content">
    <div className="side-content">
      <Intro wallOwner={wallOwner} />
    </div>
    <PostsPage wallOwner={wallOwner} currentUser={currentUser} />
  </main>
)

WallContent.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
}

export default WallContent