
import React from 'react'

function Child({setName}) {


  function handleChange(){
    setName('Name Changed from Child');
  }

  return (
    <div>
      <button onClick={handleChange}>Set Name</button>
    </div>
  )
}

export default Child
