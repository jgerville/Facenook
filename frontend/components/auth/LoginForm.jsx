import React, { useState } from 'react'

const LoginForm = ({errors, login}) => {
  const [{email, password}, setValues] = useState({
    email: "", password: ""
  })

  const update = field => (
    e => setValues(oldValues => ({
      ...oldValues,
      [field]: e.target.value
    }))
  )

  const handleSubmit = e => {
    e.preventDefault();
    login({email, password})
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="text" onChange={update('email')} value={email} placeholder="Email" />
      <input type="password" onChange={update('password')} value={password} placeholder="Password" />
      <button className="login-button" type="submit">Log In</button>
      <div className="separator" />
      <button className="create-account-button">Create new account</button>
    </form>
  )
}

export default LoginForm;