import React from 'react'
import './Header.css'

const flexContainer = {

}

const Header = () => {
  return (
    <div id="flexcontainerheader">

      <div onClick={() => window.location=`/`}>
        Home
      </div>

      <div onClick={() => window.location=`/login`}>
        Login
      </div>

      <div onClick={() => window.location=`/register`}>
        Register
      </div>

    </div>
  )
}

export default Header