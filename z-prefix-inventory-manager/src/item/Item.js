import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './Item.css'

const Item = () => {
  const [list, setList] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/item/${id}`)
    .then(response => response.json())
    .then(data => setList(data))
  }, [list, id])

    if (list !== '') {
      return (
        <div id='flexcontaineritem'>
          <div>Item: {list[0].item_name}</div>
          <div>Quantity: {list[0].quantity}</div>
          <div>Description: {list[0].description}</div>
        </div>
      )
    }
}

export default Item