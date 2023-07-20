import React, {useEffect, useState} from 'react'
import useToken from '../useToken.js'
import './MyInventory.css'

const MyInventory = () => {
  const { token } = useToken();
  const [list, setList] = useState('');
  useEffect(() => {
    fetch(`http://localhost:8080/inventory/${token[0].id}`)
    .then(response => response.json())
    .then(data => setList(data))
  }, [list, token])

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

                <div>
                  <button
                    id='buttonitem'
                    onClick={() => window.location=`/item/${item.id}`}
                    >
                      More Details
                  </button>
                  {!token ? <></> :
                  <>
                    <button
                      id='buttonitem'
                      onClick={() => {
                        fetch(`http://localhost:8080/${item.id}`, { method: 'DELETE' })
                        .then(() => alert('Deleted Item!'))
                      }}
                    >
                      Delete Item
                    </button>
                  </>
                }
                </div>

              </div>

              <div>
                <div id='bold'>Description:&nbsp;</div>
                <div>{shortenedDesc}</div>
              </div>

            </div>
          )
        })}
        <div id='flexcontainerminilist'>This is your inventory! Click on "Create Item" to get started!</div>
      </div>
    )
  } else {
    <div>Oops, no data!</div>
  }
}

export default MyInventory