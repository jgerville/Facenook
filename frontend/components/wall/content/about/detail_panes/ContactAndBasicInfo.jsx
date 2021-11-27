import React from 'react'
import PropTypes from 'prop-types'
import Email from '../detail_items/Email'

const ContactAndBasicInfo = ({ wallOwner: {email}, isMine } ) => (
  <>
    <ul>
      <li>
        <h4>Contact Info</h4> 
        <Email email={email} isMine={isMine} />
      </li>
    </ul>
  </>
)

ContactAndBasicInfo.propTypes = {
  email: PropTypes.string,
}

export default ContactAndBasicInfo;