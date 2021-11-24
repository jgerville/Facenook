import React from 'react'
import PropTypes from 'prop-types'
import Jobs from '../detail_items/Jobs'
import Schools from '../detail_items/Schools'

const WorkAndEducation = ({ wallOwner: { jobs, schools }}) => (
  <>
    <table className="work-and-education">
      <Jobs jobs={jobs} />
      <Schools schools={schools} />
    </table>
  </>
)

WorkAndEducation.propTypes = {
  wallOwner: PropTypes.object,
  jobs: PropTypes.string,
  schools: PropTypes.string,
}

export default WorkAndEducation