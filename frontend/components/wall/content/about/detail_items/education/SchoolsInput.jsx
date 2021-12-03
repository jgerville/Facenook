import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SchoolsInput = ({ editInfo, close, wallOwner }) => {
  const [schools, setSchools] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const user = { user: wallOwner };
    user.user.schools = schools;
    delete user.user.profpic;
    editInfo(user).then(close())
  }

  const exit = (e) => {
    e.preventDefault();
    close();
  }
  
  return (
    <form className="small-form">
      <input type="text" value={schools} onChange={(e) => setSchools(e.target.value)} placeholder="School/University" />
      <button onClick={exit}>Cancel</button>
      <button disabled={schools === ""}  onClick={submit}>Save</button>
    </form>
  )
}

SchoolsInput.propTypes = {
  editInfo: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  wallOwner: PropTypes.object.isRequired,
}

export default SchoolsInput;