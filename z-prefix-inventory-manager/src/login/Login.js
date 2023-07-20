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
    if (document.getElementById('username').value === '' || document.getElementById('password').value === '') {
      alert('Please fill in the username and password fields!')
    } else {
      const token = await loginUser([{
        'username': username,
        'password': password
      }]);
      console.log(token)
      if (!token.length) {
        alert('Login Unsuccessful. Please Try Again!')
      } else {
        setToken(token);
        window.location='/'
        alert('Login Successful!')
      }
    }
  }

  return (
    <div>
      <div id='loginheader'>Inventory Manager Login</div>
      <div id='flexcontainerlogin'>

        <div id='loginfield'>
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
            type='password'
            id='password'
            onChange={() => {
              setPassword(document.getElementById('password').value)
            }}
            ></input>
          </div>

          <button id="loginbutton" onClick={handleSubmit}>Login</button>
        </div>

      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login