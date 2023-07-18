import './App.css';
import Header from './header/Header.js'
import List from './list/List.js'
import Item from './item/Item.js'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = '/' element={<List />} />
        <Route path = '/item/:id' element={<Item />} />
        {/* <Route path = '/login' element={<Login />} /> */}
        {/* <Route path = '/register' element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;