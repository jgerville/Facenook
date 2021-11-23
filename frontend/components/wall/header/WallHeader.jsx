import React from "react";
import PropTypes from "prop-types";
import WallNav from "./WallNav";

const WallHeader = ({ wallOwner }) => (
  <header className="wall-header">
    {/* <CoverPhoto /> */}
    <div className="cover-photo-sub">(cover photo)</div>
    <h1 className="full-name">
      {wallOwner.fname} {wallOwner.lname}
    </h1>
    <WallNav />
  </header>
);

WallHeader.propTypes = {
  wallOwner: PropTypes.object.isRequired,
}

export default WallHeader;