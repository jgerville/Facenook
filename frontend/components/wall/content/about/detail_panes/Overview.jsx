import React from "react";
import PropTypes from "prop-types";
import Jobs from "../detail_items/Jobs";
import Schools from "../detail_items/Schools";
import Hometown from "../detail_items/Hometown";
import RelationshipStatus from "../detail_items/RelationshipStatus";

const Overview = (wallOwner) => (
  <>
    <table className="overview">
      <tbody>
        <Jobs jobs={wallOwner.jobs} />
        <Schools schools={wallOwner.schools} />
        <Hometown hometown={wallOwner.hometown} />
        <RelationshipStatus status={wallOwner.relationshipStatus} />
      </tbody>
    </table>
  </>
);

// Overview.propTypes = {

// }

export default Overview;