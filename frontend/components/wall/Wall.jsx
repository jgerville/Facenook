import React, { useEffect, useState } from "react";
import WallHeader from "./header/WallHeader";
import Intro from "./Intro";

const Wall = ({ currentUser, wallOwner, getWallInfo }) => {
  useEffect(() => {
    getWallInfo();
  }, []);

  return !wallOwner ? null : (
    <main>
      <WallHeader wallOwner={wallOwner} />
      <Intro wallOwner={wallOwner} />
    </main>
  );
};

export default Wall;