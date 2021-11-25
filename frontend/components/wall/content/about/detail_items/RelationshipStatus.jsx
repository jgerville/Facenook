import React from "react";
import PropTypes from "prop-types";

const RelationshipStatus = ({ status, isMine }) => (
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
          {isMine ? <i className="fas fa-plus" /> : <i className="fas fa-heart" />}
        </th>
        <td>
          {isMine ? <>Add a relationship status</> : <>No relationship info to show</>}
        </td>
      </>
    )}
  </tr>
);

RelationshipStatus.propTypes = {
  status: PropTypes.string,
};

export default RelationshipStatus;