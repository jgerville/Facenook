import React from 'react'
import Banner from './Banner';
import LoginFormContainer from './login_form_container';

const LoginPage = () => (
  <div className="login-container">
    <div className="login-page">
      <Banner />
      <LoginFormContainer />
    </div>
  </div>
)

export default LoginPage;