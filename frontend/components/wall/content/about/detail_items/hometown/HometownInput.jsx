import React, { useState } from 'react'
import PropTypes from 'prop-types'

const HometownInput = ({ editInfo, close, wallOwner }) => {
  const [hometown, setHometown] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const user = { user: wallOwner };
    user.user.hometown = hometown;
    delete user.user.profpic;
    editInfo(user).then(close())
  }

  const exit = (e) => {
    e.preventDefault();
    close();
  }
  
  return (
    <form className="small-form">
      <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} placeholder="Hometown" />
      <button onClick={exit}>Cancel</button>
      <button disabled={hometown === ""}  onClick={submit}>Save</button>
    </form>
  )
}

HometownInput.propTypes = {
  editInfo: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  wallOwner: PropTypes.object.isRequired,
}

export default HometownInput;