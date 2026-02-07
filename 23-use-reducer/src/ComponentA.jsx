import React from 'react'
import { useReducer } from 'react'

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count : 0 };
    default:
      return state;
  }
}

function ComponentA() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (

      <div>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      </div>
    )
}

export default ComponentA
