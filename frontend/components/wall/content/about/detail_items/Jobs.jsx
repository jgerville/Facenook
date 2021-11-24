import React from 'react'
import PropTypes from 'prop-types'

const Jobs = ({ jobs }) => (
  <tr>
    {jobs ? (
      <>
        <th>
          <i className="fas fa-briefcase" />
        </th>
        <td>
          Works at {jobs}
        </td>
      </>
    ) : (
      <>
        <th>
          <i className="fas fa-briefcase" />
        </th>
        <td>
          No job info to show
        </td>
      </>
    )} 
  </tr>
)

Jobs.propTypes = {
  jobs: PropTypes.string,
}

export default Jobs
