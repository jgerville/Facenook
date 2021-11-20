import axios from 'axios';

export const login = credentials => (
  axios.post('/api/session', credentials)
    .then(res => res.data)
)

export const logout = () => (
  axios.delete('/api/session')
    .then(res => res.data)
)