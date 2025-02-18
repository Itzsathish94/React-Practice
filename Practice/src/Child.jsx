import React, { useContext } from 'react'
import { UserContext } from './Counter'


function Child(){

    const user = useContext(UserContext);

  return (
    <div>
      <h1>Data received: {user}</h1>
    </div>
  )
}

export default Child
