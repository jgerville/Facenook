import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WallHeader from "./header/WallHeader";
import WallContent from "./content/WallContent";

const Wall = ({ currentUser, wallOwner, getWallInfo }) => {
  useEffect(() => {
    getWallInfo();
  }, []);

  return !wallOwner ? null : (
    <main>
      <WallHeader wallOwner={wallOwner} />
      <WallContent wallOwner={wallOwner} />
    </main>
  );
};

Wall.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object,
  getWallInfo: PropTypes.func.isRequired,
}

export default Wall;