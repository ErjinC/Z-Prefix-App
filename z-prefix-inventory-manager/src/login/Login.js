import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './Login.css'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser([{
      'username': username,
      'password': password
    }]);
    console.log(token)
    setToken(token);
  }

  return (
    <div>

      <div>
        <div>
          <div>Username</div>
          <input
          type='textbox'
          id='username'
          onChange={() => {
            setUsername(document.getElementById('username').value)
          }}
          ></input>
        </div>

        <div>
          <div>Password</div>
          <input
          type='textbox'
          id='password'
          onChange={() => {
            setPassword(document.getElementById('password').value)
          }}
          ></input>
        </div>
      </div>

      <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login