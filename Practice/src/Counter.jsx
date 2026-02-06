import React, { useState } from 'react'

function Counter() {

  const [count,setCount] = useState(0);

  function decrement(){
    setCount(c=>c-1)
  }

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(c=>c+1)}>Increment</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
