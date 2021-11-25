import React from "react";
import PropTypes from "prop-types";

const Jobs = ({ jobs, isMine, edit }) => (
  <>
    {isMine ? (
      // if wall is mine, display edit option
      <>
        <tr onClick={edit}>
          <th><i className="fas fa-plus" /></th>
          <td><span>Add a job</span></td>
        </tr>
        {jobs && (
          <tr>
            <th>
              <i className="fas fa-briefcase" />
            </th>
            <td>Works at {jobs}</td>
          </tr>
        )}
      </>
    ) : (
      // if wall is not mine, do not display edit option
      <>
        {jobs ? (
          <tr>
            <th>
              <i className="fas fa-briefcase" />
            </th>
            <td>Works at {jobs}</td>
          </tr>
        ) : (
          <tr>
            <th><i className="fas fa-briefcase" /></th>
            <td>No job info to show</td>
          </tr>
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
