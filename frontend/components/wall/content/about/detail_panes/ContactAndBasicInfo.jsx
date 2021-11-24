import React from 'react'
import PropTypes from 'prop-types'
import Email from '../detail_items/Email'

const ContactAndBasicInfo = ({ wallOwner: {email} }) => (
  <>
   <h4>Contact Info</h4> 
   <table className="email">
     <tbody>
      <Email email={email} />
     </tbody>
   </table>
  </>
)

ContactAndBasicInfo.propTypes = {
  email: PropTypes.string,
}

export default ContactAndBasicInfo;