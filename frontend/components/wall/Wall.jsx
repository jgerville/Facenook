import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import WallHeader from "./header/WallHeader";
import WallContent from "./content/WallContent";
import WallAbout from "./content/about/WallAbout";
import FriendsList from "./content/friendslist/FriendsList";

const Wall = ({
  currentUser,
  wallOwner,
  getWallInfo,
  isMine,
  params: { userId },
}) => {
  
  useEffect(() => {
    getWallInfo();
  }, [userId]);

  return !wallOwner ? null : (
    <>
      <WallHeader wallOwner={wallOwner} isMine={isMine} />
      <Routes>
        <Route
          exact
          strict
          path="/"
          element={
            <WallContent wallOwner={wallOwner} currentUser={currentUser} />
          }
        />
        <Route
          path="/about/*"
          element={<WallAbout wallOwner={wallOwner} isMine={isMine} />}
        />
        <Route
          path="/friends/"
          element={<FriendsList wallOwner={wallOwner} />}
        />
      </Routes>
    </>
  );
};

Wall.propTypes = {
  currentUser: PropTypes.object.isRequired,
  wallOwner: PropTypes.object,
  getWallInfo: PropTypes.func.isRequired,
  isMine: PropTypes.bool,
  userId: PropTypes.string,
};

export default Wall;