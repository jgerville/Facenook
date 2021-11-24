import React from 'react'
import PropTypes from 'prop-types'

const Jobs = ({ jobs }) => (
  <>
    {jobs ? (
      <>
        <i className="fas fa-briefcase" />
        Works at {jobs}
      </>
    ) : (
      <>
        <i className="fas fa-briefcase" />
        No job info to show
      </>
    )} 
  </>
)

Jobs.propTypes = {
  jobs: PropTypes.string,
}

export default Jobs
