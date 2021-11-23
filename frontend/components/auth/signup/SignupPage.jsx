import React from "react";
import SignupFormContainer from "./signup_form_container";

const SignupPage = () => (
  <div className="outer-modal">
    <div className="inner-modal">
      <SignupFormContainer />
    </div>
  </div>
);

export default SignupPage;