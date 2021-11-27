import React from "react";
import PropTypes from "prop-types";
import DetailItem from "../DetailItem";
import DetailItemIcon from "../DetailItemIcon";

const RelationshipStatus = ({ status, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <div className="edit-toggler" onClick={edit}>
          <DetailItemIcon category={"plus"} />
          <span>Change your relationship status</span>
        </div>
        {status && <DetailItem category="relationship" info={status} />}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {status ? (
          <DetailItem category="relationship" info={status} />
        ) : (
          <DetailItem category="relationship" info="" />
        )}
      </>
    )}
  </>
);

RelationshipStatus.propTypes = {
  status: PropTypes.string,
  isMine: PropTypes.bool,
  edit: PropTypes.func,
};

export default RelationshipStatus;