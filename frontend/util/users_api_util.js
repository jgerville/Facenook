import axios from "axios"

export const signup = user => (
  axios.post('/api/users', user)
    .then(res => res.data)
)