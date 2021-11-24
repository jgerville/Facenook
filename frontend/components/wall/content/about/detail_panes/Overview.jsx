import React from "react";
import PropTypes from "prop-types";
import Jobs from "../detail_items/Jobs";
import Schools from "../detail_items/Schools";
import Hometown from "../detail_items/Hometown";
import RelationshipStatus from "../detail_items/RelationshipStatus";

const Overview = (wallOwner) => (
  <>
    <ul>
      <li><Jobs jobs={wallOwner.jobs} /></li>
      <li><Schools schools={wallOwner.schools} /></li>
      <li><Hometown hometown={wallOwner.hometown} /></li>
      <li><RelationshipStatus status={wallOwner.relationshipStatus} /></li>
    </ul>
  </>
);

// Overview.propTypes = {

// }

export default Overview;