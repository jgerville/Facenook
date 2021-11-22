import React from 'react'

const SignupHeader = ({close}) => (
  <div className="signup-header">
    <h3>Sign Up</h3>
    <i onClick={close} className="fas fa-times close-signup-page" />
    <p>It's quick and easy.</p>
  </div>
)

export default SignupHeader;