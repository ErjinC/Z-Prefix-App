import React, {useEffect, useState} from 'react'
import useToken from '../useToken.js'
import './CreateItem.css'

const Item = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('')
  const { token } = useToken();


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
            id="loginbutton"
            onClick={() => {
              if (itemName === '' || description === '' || quantity === '') {
                alert('Please fill in ALL text boxes!')
              } else {
                fetch('http://localhost:8080/createitem', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify([{
                    'item_name': itemName,
                    'description': description,
                    'quantity': quantity,
                    'userid': token[0].id
                  }])
                })
                .then(data => data.json())
                .then(window.location=`/myinventory`)
                .then(alert('New Inventory Item Added!'))
              }}}>
            Add Item to Inventory
          </button>
        </div>
      </div>
    )

}

export default Item