import React, { useState } from 'react'
import PropTypes from 'prop-types'

const JobsInput = ({ editInfo, close, wallOwner }) => {
  const [jobs, setJobs] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const user = { user: wallOwner };
    user.user.jobs = jobs;
    delete user.user.profpic;
    editInfo(user).then(close());
  }

  const exit = (e) => {
    e.preventDefault();
    close();
  }
  
  return (
    <form onSubmit={submit} className="small-form">
      <input type="text" value={jobs} onChange={(e) => setJobs(e.target.value)} placeholder="Job" />
      <button onClick={exit}>Cancel</button>
      <button disabled={jobs === ""} type="submit">Save</button>
    </form>
  )
}

JobsInput.propTypes = {
  editInfo: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  wallOwner: PropTypes.object.isRequired,
}

export default JobsInput