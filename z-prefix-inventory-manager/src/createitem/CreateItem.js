import React, {useEffect, useState} from 'react'
import useToken from '../useToken.js'

const CreateItem = () => {
  const { token } = useToken();
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <div>
      <div id='loginheader'>Create a New Inventory Item</div>
      <div id='flexcontainerlogin'>

        <div id='loginfield'>

          <div>
            <div>Item Name</div>
            <input
            type='textbox'
            id='itemname'
            onChange={() => {
              setItemName(document.getElementById('itemname').value)
            }}
            ></input>
          </div>

          <div>
            <div>Description</div>
            <textarea
            id='description'
            onChange={() => {
              setDescription(document.getElementById('description').value)
            }}
            ></textarea>
          </div>

          <div>
            <div>Quantity</div>
            <input
            type='textbox'
            id='quantity'
            onChange={() => {
              setQuantity(document.getElementById('quantity').value)
            }}
            ></input>
          </div>

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
              .then(window.location='/')
              .then(alert('New Inventory Item Added!'))
            }}}>
            Add Item to Inventory
          </button>

        </div>

      </div>
    </div>
  )
}

export default CreateItem