import React from 'react'
import PropTypes from 'prop-types'
import Jobs from '../detail_items/jobs/Jobs'
import Schools from '../detail_items/Schools'

const WorkAndEducation = ({ wallOwner: { jobs, schools }, isMine}) => (
  <>
    <h4>Work</h4>
    <table className="work">
      <tbody>
        <Jobs jobs={jobs} isMine={isMine} />
      </tbody>
    </table>

    <h4>Education</h4>
    <table className="education">
      <tbody>
        <Schools schools={schools} isMine={isMine} />
      </tbody>
    </table>
  </>
)

WorkAndEducation.propTypes = {
  wallOwner: PropTypes.object,
  jobs: PropTypes.string,
  schools: PropTypes.string,
}

export default WorkAndEducation