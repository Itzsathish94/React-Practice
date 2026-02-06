import React from 'react'
import { useState } from 'react'

const Child =({setName}) =>{
    return <div>
    <button onClick={()=>setName('New Name from Child')}>Change Name from Child</button>
    </div>
}

const Parent = () => {

    const [name,setName] = useState('');

  return (
    <div>
      <p>Name sent from Child : {name}</p>
      <Child setName ={setName} />
    </div>
  )
}

export default Parent
