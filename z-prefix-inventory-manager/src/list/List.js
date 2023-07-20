import React, {useEffect, useState} from 'react'
import useToken from '../useToken.js'
import './List.css'

const List = () => {
  const { token } = useToken();
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
        <div id='flexcontainerminilist'>Register an account and add something to the database!</div>
      </div>
    )
  } else {
    <div>Oops, no data!</div>
  }
}

export default List