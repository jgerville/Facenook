import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Routes, Route, Link } from "react-router-dom";
import WallHeader from "./header/WallHeader";
import WallContent from "./content/WallContent";
import WallAbout from "./content/WallAbout";

const Wall = ({ currentUser, wallOwner, getWallInfo, isMine }) => {
  useEffect(() => {
    getWallInfo();
  }, []);

  return !wallOwner ? null : (
    <main>
      <WallHeader wallOwner={wallOwner} />
      <Routes>
        <Route exact strict path="/" element={<WallContent wallOwner={wallOwner} />} />
        <Route
          path="/about"
          element={<WallAbout wallOwner={wallOwner} isMine={isMine} />}
        />
      </Routes>
    </main>
  );
};

Wall.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object,
  getWallInfo: PropTypes.func.isRequired,
  isMine: PropTypes.bool,
};

export default Wall;