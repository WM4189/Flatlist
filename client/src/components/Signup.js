import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory} from 'react-router-dom'

function Signup({ setCurrentUser }) {
//   const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        bio,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // history.push('/playlists')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="bio"
          >
            Bio
          </label>
          <input
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password_confirmation"
          >
            Password Confirmation
          </label>
          <input
            type="password_confirmation"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/">Log In</Link></p>
      </form>
    </div>
  )
}

export default Signup