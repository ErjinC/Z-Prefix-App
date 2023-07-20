import './App.css';
import React, {useState} from 'react'
import useToken from './useToken.js'
import Header from './header/Header.js'
import List from './list/List.js'
import Item from './item/Item.js'
import ItemEdit from './item/ItemEdit.js'
import Login from './login/Login.js'
import Register from './register/Register.js'
import CreateItem from './createitem/CreateItem.js'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  const { token, setToken } = useToken();

  // if(!token || token === []) {
  //   console.log(token)
  //   return (
  //     <Login setToken={setToken} />
  //     )
  // } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route path = '/' element={<List />} />
          <Route path = '/item/:id' element={<Item />} />
          <Route path = '/itemedit/:id' element={<ItemEdit />} />
          <Route path = '/login' element={<Login setToken={setToken}/>} />
          <Route path = '/register' element={<Register />} />
          <Route path = '/createitem' element={<CreateItem />} />
        </Routes>
      </div>
    )
  // }
}

export default App;