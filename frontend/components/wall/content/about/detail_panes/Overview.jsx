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

Overview.propTypes = {
  wallOwner: PropTypes.shape({
    jobs: PropTypes.string,
    schools: PropTypes.string,
    hometown: PropTypes.string,
    relationshipStatus: PropTypes.string,
  }),
}

export default Overview;