export const postUser = (user) => (
  fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
  })
    .then(res => res.json())
)