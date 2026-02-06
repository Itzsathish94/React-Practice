import React from 'react'

function List({items=[],category='Items'}) {

    const itemList = items.map(item=>
        <li key={item.id}> {item.name}  :  {item.quantity}</li>
    )

  return (
    <div>
      <h1>{category}</h1>
      <ol>{itemList}</ol>
    </div>
  )
}

export default List
