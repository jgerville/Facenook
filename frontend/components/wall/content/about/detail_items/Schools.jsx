import React from "react";
import PropTypes from "prop-types";
import DetailItem from "./DetailItem";
import DetailItemIcon from "./DetailItemIcon";

const Schools = ({ schools, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <div className="edit-toggler" onClick={edit}>
          <DetailItemIcon category={"plus"} />
          <span>Add a school</span>
        </div>
        {schools && <DetailItem category="education" info={schools} />}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {schools ? (
          <DetailItem category="education" info={schools} />
        ) : (
          <DetailItem category="education" info="" />
        )}
      </>
    )}
  </>
);

Schools.propTypes = {
  schools: PropTypes.string,
  isMine: PropTypes.bool,
  edit: PropTypes.func,
};

export default Schools;