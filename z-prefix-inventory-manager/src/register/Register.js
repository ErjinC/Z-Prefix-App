import React, {useEffect, useState} from 'react'

const Register = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>

      <div>
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
        onClick={() => {
          console.log([{
            'first_name': first,
            'last_name': last,
            'username': username,
            'password': password
          }])
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
        }}
        >
          Register
        </button>
      </div>

    </div>
  )
}

export default Register