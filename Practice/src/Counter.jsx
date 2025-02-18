import React from 'react'
import { useState,useMemo } from 'react'

export default function Counter() {

  const [count,setCount] = useState(0);

  const expensiveFunction =()=>{
    console.log('Calculatin expensive function.....')
    let sum = 0
    for(let i=0;i<100000;i++){
      sum+=i
    }
    return sum
  }

  const addCount = ()=>{
    setCount(c=>c+1)
    console.log(count)
  }


  return (
    <div>
      <h1>Expesnive function:{expensiveFunction()}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  )
}
