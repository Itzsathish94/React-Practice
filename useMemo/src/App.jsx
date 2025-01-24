import React from 'react'
import { useState,useMemo } from 'react'

const App = () => {

  const [count,setCount] = useState(0);

  const expensiveFunction = useMemo(() =>{
    console.log('Calculating....')
    let sum=0
    for(let i=0;i<1e7;i++){
      sum+=i
    }
    return sum
  },[])

  const addCount = ()=>{
    setCount(c=>c+1)
    console.log(count)
  }

  return (
    <div>
      <h1>Expensive function Calculation:{expensiveFunction}</h1>
      <button onClick={addCount}>Increment</button>
    </div>
  )
}

export default App
