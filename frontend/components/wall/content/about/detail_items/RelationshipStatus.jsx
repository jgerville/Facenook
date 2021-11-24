import React from "react";
import PropTypes from "prop-types";

const RelationshipStatus = ({ status }) => (
  <>
    {status ? (
      <>
        <i className="fas fa-heart" />
        {status}
      </>
    ) : (
      <>
        <i className="fas fa-heart" />
        No relationship info to show
      </>
    )}
  </>
);

RelationshipStatus.propTypes = {
  status: PropTypes.string,
};

export default RelationshipStatus;