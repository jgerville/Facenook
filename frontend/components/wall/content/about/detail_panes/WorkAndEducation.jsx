import React from "react";
import PropTypes from "prop-types";
import Jobs from "../detail_items/jobs/Jobs";
import Schools from "../detail_items/Schools";

const WorkAndEducation = ({ wallOwner: { jobs, schools }, isMine }) => (
  <>
    <h4>Work</h4>
    <div className="work">
      <Jobs jobs={jobs} isMine={isMine} />
    </div>

    <h4>Education</h4>
    <div className="education">
      <Schools schools={schools} isMine={isMine} />
    </div>
  </>
);

WorkAndEducation.propTypes = {
  wallOwner: PropTypes.object,
  jobs: PropTypes.string,
  schools: PropTypes.string,
};

export default WorkAndEducation;