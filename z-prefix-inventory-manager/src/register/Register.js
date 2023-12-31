import React, {useEffect, useState} from 'react'
import './Register.css'

const Register = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div id='registerheader'>Inventory Manager Account Registration</div>
      <div id='flexcontainerregister'>
        <div id='registerfield'>
          <div>
            <div>First Name</div>
            <input
            type='textbox'
            id='first'
            onChange={() => {
              setFirst(document.getElementById('first').value)
            }}
            ></input>
          </div>

          <div>
            <div>Last Name</div>
            <input
            type='textbox'
            id='last'
            onChange={() => {
              setLast(document.getElementById('last').value)
            }}
            ></input>
          </div>

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

          <button
          id='registerbutton'
          onClick={() => {
            if (first === '' || last === '' || username === '' || password === '') {
              alert('Please fill in ALL text boxes!')
            } else {
              fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify([{
                  'first_name': first,
                  'last_name': last,
                  'username': username,
                  'password': password
                }])
              })
              .then(data => data.json())
              .then(window.location='/login')
              .then(alert('Registration Successful!'))
            }
          }}
          >
            Register
          </button>
        </div>

      </div>
    </div>
  )
}

export default Register