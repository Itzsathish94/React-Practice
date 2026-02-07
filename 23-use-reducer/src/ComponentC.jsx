import React from 'react'
import { useReducer } from 'react'

const initialValue = 0;

function counterReducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state + 1 ;
    case "DECREMENT":
      return state - 1 ;
    case "RESET":
      return initialValue;
    default:
      return state;
  }
}

function ComponentA() {

    const [count, dispatch] = useReducer(counterReducer, initialValue);
    const [count2,dispatch2] = useReducer(counterReducer, initialValue)
 
    return (

      <div>
        <p>{count}</p>
        <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
        <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <br />
        <p>{count2}</p>
        <button onClick={()=>dispatch2("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch2("RESET")}>Reset</button>
        <button onClick={()=>dispatch2("INCREMENT")}>Increment</button>
      </div>
    )
}

export default ComponentA
