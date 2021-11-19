export const login = credentials => (
  fetch('/api/session', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
  })
    .then(res => res.json())
)

export const logout = () => (
  fetch('/api/session', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
  })
    .then(res => res.json())
)