import React, { useState } from 'react'

const LoginForm = ({errors, login}) => {
  const [{email, password}, setValues] = useState({
    email: "", password: ""
  })

  const update = field => {
    e => setValues(oldValues => ({
      ...oldValues,
      [field]: e.target.value
    }))
  }

  return (
    <form onSubmit={login({email, password})}>
      <input type="email" onChange={update('email')} />
      <input type="password" onChange={update('password')} />
    </form>
  )
}

export default LoginForm;