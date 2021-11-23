import React from "react";
import WallNav from "./WallNav";

const WallHeader = ({ wallOwner }) => (
  <header>
    {/* <CoverPhoto /> */}
    <h2>
      {wallOwner.fname} {wallOwner.lname}
    </h2>
    <WallNav />
  </header>
);

export default WallHeader;