import React from 'react'
import { useReducer } from 'react'

const initialValue = {
    firstCounter : 0,
    secondCounter:10
}


function counterReducer(state,action){
    switch(action.type){
        case "Decrement":
        return {...state,firstCounter : state.firstCounter-action.payLoad};
        case "Increment":
        return {...state, firstCounter:state.firstCounter+action.payLoad};
        case "Increment2":
        return {...state,secondCounter : state.secondCounter+action.payLoad};
        case "Decrement2":
        return {...state, secondCounter:state.secondCounter-action.payLoad};
        case "Reset":
        return initialValue;
        default:
            return state
    }
}

function ComponentB() {

   const [count,dispatch] = useReducer(counterReducer,initialValue)

  return (
    <div>
      <h2>{count.firstCounter}</h2>
      <h2>{count.secondCounter}</h2>
      <button onClick={()=>dispatch({type:"Decrement",payLoad:1})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Increment",payLoad:1})}>Increment</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
      <button onClick={()=>dispatch({type:"Decrement",payLoad:5})}>Decrement 5 </button>
      <button onClick={()=>dispatch({type:"Increment",payLoad:5})}>Increment 5</button> <br />
      <button onClick={()=>dispatch({type:"Decrement2",payLoad:1})}>Decrement Second Counter</button>
      <button onClick={()=>dispatch({type:"Increment2",payLoad:1})}>Increment Second Counter</button>
      
    </div>
  )
}

export default ComponentB
