import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'


const IncrementButton = ({onIncrement})=>{
console.log('Child component re-rendered');
return <div>
  <button onClick={onIncrement}>Increment</button>
</div>
}

const App = () => {

  const [count,setCount] = useState(0);

  const increment =useCallback(()=>{
    console.log('Increment button clicked');
    setCount(c=>c+1);
  },[])

  return (
    <div>
    <p>Count:{count}</p>
    <IncrementButton onIncrement={increment}/>
    </div>
  )
}

export default App
