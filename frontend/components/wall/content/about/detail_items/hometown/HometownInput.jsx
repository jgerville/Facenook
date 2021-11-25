import React, { useState } from 'react'
import PropTypes from 'prop-types'

const HometownInput = ({ editInfo, close, wallOwner }) => {
  const [hometown, setHometown] = useState("")

  const submit = (e) => {
    e.preventDefault();
    const user = { user: wallOwner };
    user.user.hometown = hometown;
    editInfo(user).then(close())
  }

  const exit = (e) => {
    e.preventDefault();
    close();
  }
  
  return (
    <tr>
      <th></th>
      <td>
        <form className="small-form">
          <input type="text" value={hometown} onChange={(e) => setHometown(e.target.value)} />
          <button onClick={exit}>Cancel</button>
          <button onClick={submit}>Save</button>
        </form>
      </td>
    </tr>
  )
}

HometownInput.propTypes = {
  editInfo: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  wallOwner: PropTypes.object.isRequired,
}

export default HometownInput;