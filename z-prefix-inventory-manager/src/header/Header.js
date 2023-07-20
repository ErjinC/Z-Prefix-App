import React from 'react'
import useToken from '../useToken.js'
import './Header.css'

const Header = () => {
  const { token, setToken } = useToken();
  return (
    <div id="flexcontainerheader">

      <div id="flexcontainerbuttons">
        <div onClick={() => window.location=`/`}>
          Home
        </div>

        <div onClick={() => window.location=`/login`}>
          Login
        </div>

        <div onClick={() => window.location=`/register`}>
          Register
        </div>

        <div onClick={() => {
          if (!token) {
            alert('You must login to create an item!')
          } else {
            console.log(token)
            alert('Add route here')
          }
          }}>
          Create Item
        </div>
      </div>

      <div id='userinfo'>
        {!token ? <div>Not Logged In</div> :
          <>
            <div>Logged in as: {token[0].username}</div>
            <div>Welcome, {token[0].first_name}!</div>
          </>}

          {/* <div>Logged in as: {token[0].username}</div>
          <div>Welcome, {token[0].first_name}!</div> */}
      </div>

    </div>
  )
}

export default Header