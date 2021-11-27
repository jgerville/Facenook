import React from "react";
import PropTypes from "prop-types";
import DetailItem from "../DetailItem";
import DetailItemIcon from "../DetailItemIcon";

const Jobs = ({ jobs, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <div className="edit-toggler" onClick={edit}>
          <DetailItemIcon category={"plus"} />
          <span>Add a job</span>
        </div>
        {jobs && <DetailItem category="job" info={jobs} />}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {jobs ? (
          <DetailItem category="job" info={jobs} />
        ) : (
          <DetailItem category="job" info="" />
        )}
      </>
    )}
  </>
);

Jobs.propTypes = {
  jobs: PropTypes.string,
  isMine: PropTypes.bool,
  edit: PropTypes.func,
};

export default Jobs;