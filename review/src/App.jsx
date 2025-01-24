////this is not completed yet. Problem was to get name and age from user, using submit button have to submit data. Must use ref and usereducer. If user age is above 18, save the usetype as adult else not adult. 

///Another question is, create two input boxes, if two inputs are same. Show in p tag as 'Equal' else show 'Not equal'. Use only one button.

import React from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'

function customReducer(state,action){
    switch(action.type){
        case 'Submit':
            return state.age > 18 ? {name:state.name,age:state.age,userType:"Adult"} : {name:state.name,age:state.age,userType:'Not adult'}
        case 'Reset':
            return {name:'',age:'',userType:''}
        default:
            return state
    }
}

const App = () => {

    const nameRef = useRef('')

    const [state,dispatch] = useReducer(customReducer,{name:nameRef.value,age:2,userType:''})


 
        console.log(nameRef.value)
   


 
  return (
    <div>
      <input  ref={nameRef} type="text"  placeholder='Enter Name'/> <br />
      <input type="number" placeholder='Set age'/> <br />
      <button onClick={()=>dispatch({type:'Submit'})}>Submit</button> <button>Reset</button>
     <h1>{state.name} {state.age}</h1>
    </div>
  )
}

export default App
