import React from "react";
import PropTypes from "prop-types";
import Jobs from "../detail_items/jobs/Jobs";
import Schools from "../detail_items/education/Schools";

const WorkAndEducation = ({ wallOwner: { jobs, schools }, isMine }) => (
  <>
    <ul>
      <li>
        <h4>Work</h4>
        <Jobs jobs={jobs} isMine={isMine} />
      </li>
      <li>
        <h4>Education</h4>
        <Schools schools={schools} isMine={isMine} />
      </li>
    </ul>
  </>
);

WorkAndEducation.propTypes = {
  wallOwner: PropTypes.object,
  jobs: PropTypes.string,
  schools: PropTypes.string,
};

export default WorkAndEducation;