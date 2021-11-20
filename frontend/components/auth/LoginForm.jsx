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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={update('email')} value={email}/>
      <input type="password" onChange={update('password')} value={password} />
      <input type="submit" value="Log In"/>
    </form>
  )
}

export default LoginForm;