import React from "react";
import PropTypes from "prop-types";

const RelationshipStatus = ({ status }) => (
  <tr>
    {status ? (
      <>
        <th>
          <i className="fas fa-heart" />
        </th>
        <td>
          {status}
        </td>
      </>
    ) : (
      <>
        <th>
          <i className="fas fa-heart" />
        </th>
        <td>
          No relationship info to show
        </td>
      </>
    )}
  </tr>
);

RelationshipStatus.propTypes = {
  status: PropTypes.string,
};

export default RelationshipStatus;