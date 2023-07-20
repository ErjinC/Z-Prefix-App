import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './Item.css'

const ItemEdit = () => {
  const [list, setList] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('')
  const { id } = useParams();
  useEffect(() => {
    if(list === '') {
      fetch(`http://localhost:8080/item/${id}`)
      .then(response => response.json())
      .then(data => {
        setList(data)
        setItemName(data[0].item_name)
        setQuantity(data[0].quantity)
        setDescription(data[0].description)
      })
    }
  }, [list, id])

    if (list !== '') {
      return (
        <div id='flexcontaineritem'>

          <div id='quality'>
            <div id='bold'>Item:&nbsp;</div>
            <input
              type='text'
              maxlength='50'
              id='itemname'
              value={itemName}
              onChange={() => {
                setItemName(document.getElementById('itemname').value)
              }}
            ></input>
          </div>

          <div id='quality'>
            <div id='bold'>Quantity:&nbsp;</div>
            <input
              type='text'
              maxlength='10'
              id='quantity'
              value={quantity}
              onChange={() => {
                setQuantity(document.getElementById('quantity').value)
              }}
            ></input>
          </div>

          <div>
            <div id='bold'>Description:&nbsp;</div>
            <textarea
              type='text'
              id='description'
              maxlength='250'
              value={description}
              onChange={() => {
                setDescription(document.getElementById('description').value)
              }}
            ></textarea>
          </div>

          <div>
            <button
              id='buttonitem'
              onClick={() => {
                if(document.getElementById('itemname').value === '' || document.getElementById('quantity').value === '' || document.getElementById('description').value === '') {
                  alert('Please make sure the text fields are not empty!')
                } else {
                  let resBody = [{
                    "item_name": itemName,
                    "description": description,
                    "quantity": quantity
                  }]
                  const init = {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(resBody)
                  }
                  fetch(`http://localhost:8080/itemedit/${id}`, init)
                  .then(() => {
                    alert('Updated Successfully!')
                    window.location=`/item/${id}`
                  })
                }
              }}
            >
              Apply Changes
            </button>
          </div>
        </div>
      )
    }
}

export default ItemEdit