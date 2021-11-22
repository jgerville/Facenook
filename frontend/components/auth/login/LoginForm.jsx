import React, { useState } from 'react'
import SignupPage from '../signup/SignupPage';

const LoginForm = ({errors, login}) => {
  const [{email, password}, setValues] = useState({
    email: "", password: ""
  })

  const [showSignup, setShowSignup] = useState(false);

  const update = field => (
    e => setValues(oldValues => ({
      ...oldValues,
      [field]: e.target.value
    }))
  )

  const openSignup = e => {
    e.preventDefault();
    setShowSignup(true);
  }

  const closeSignup = e => {
    e.preventDefault();
    setShowSignup(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    login({email, password})
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input 
        type="text" onChange={update('email')} 
        value={email} placeholder="Email" />
      <input 
        type="password" onChange={update('password')} 
        value={password} placeholder="Password" />
      <button className="login-button" type="submit">Log In</button>
      <div className="separator" />
      <button className="create-account-button" onClick={openSignup}>
        Create new account
      </button>
      {showSignup && <SignupPage close={closeSignup} />}
    </form>
  )
}

export default LoginForm;