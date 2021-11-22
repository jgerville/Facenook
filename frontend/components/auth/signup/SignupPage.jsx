import React from 'react'
import SignupHeader from './SignupHeader';
import SignupFormContainer from './signup_form_container';

const SignupPage = ({close}) => (
  <div className="outer-modal">
    <div className="inner-modal">
      <SignupHeader close={close}/>
      <SignupFormContainer />
    </div>
  </div>
)

export default SignupPage;