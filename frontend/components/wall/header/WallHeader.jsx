import React from "react";
import PropTypes from "prop-types";
import WallNav from "./WallNav";
import Avatar from "../../graphics/Avatar";
import CoverPhoto from "../../graphics/CoverPhoto";

const WallHeader = ({ wallOwner, isMine }) => (
  <header className="wall-header">
    <CoverPhoto user={wallOwner} isMine={isMine} />
    <Avatar user={wallOwner} isMine={isMine} />
    <h1 className="full-name">
      {wallOwner.fname} {wallOwner.lname}
    </h1>
    <WallNav />
  </header>
);

WallHeader.propTypes = {
  wallOwner: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
}

export default WallHeader;