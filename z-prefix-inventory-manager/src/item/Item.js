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

          <div id='quality'>
            <div id='bold'>Item:&nbsp;</div>
            <div>{list[0].item_name}</div>
          </div>

          <div id='quality'>
            <div id='bold'>Quantity:&nbsp;</div>
            <div>{list[0].quantity}</div>
          </div>

          <div>
            <div id='bold'>Description:&nbsp;</div>
            <div>{list[0].description}</div>
          </div>

          <div>
            <button
            id='buttonitem'
              onClick={() => window.location=`/itemedit/${id}`}
            >Edit Item</button>
          </div>
        </div>
      )
    }
}

export default Item