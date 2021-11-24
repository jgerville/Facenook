import React from 'react'
import PropTypes from 'prop-types'

const Schools = ({ schools }) => (
  <>
    {schools ? (
      <>
        <i className="fas fa-graduation-cap" />
        Studied at {schools}
      </>
    ) : (
      <>
        <i className="fas fa-graduation-cap" />
        No education info to show
      </>
    )}
  </>
)

Schools.propTypes = {
  schools: PropTypes.string,
}

export default Schools
