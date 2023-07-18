import React, {useEffect, useState} from 'react'
import './List.css'

const List = () => {
  const [list, setList] = useState('');
  useEffect(() => {
    fetch(`http://localhost:8080/inventory`)
    .then(response => response.json())
    .then(data => setList(data))
  }, [list])

  if (list !== '') {
    return (
      <div>
        {list.map(item => {
          let shortenedDesc = item.description;
          if (item.description.length > 100) {
            shortenedDesc = `${item.description.slice(0, 100)}...`
          }
          return (
            <div id='flexcontainerlist'>
              <div id='flexcontainerminilist'>
                <div>Item: {item.item_name}</div>
                <div>Quantity: {item.quantity}</div>
                <button>More Details</button>
              </div>
              <div>Description: {shortenedDesc}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default List