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

                <div id='quality'>
                  <div id='bold'>Item:&nbsp;</div>
                  <div>{item.item_name}</div>
                </div>

                <div id='quality'>
                  <div id='bold'>Quantity:&nbsp;</div>
                  <div>{item.quantity}</div>
                </div>

                <button onClick={() => window.location=`/item/${item.id}`}>More Details</button>

              </div>

              <div>
                <div id='bold'>Description:&nbsp;</div>
                <div>{shortenedDesc}</div>
              </div>

            </div>
          )
        })}
      </div>
    )
  }
}

export default List