import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
export const NameContext = createContext();

const ChildComponent = () =>{
    const name = useContext(NameContext);

    return <div>Name:{name}</div>
}

const MyComponent = () => {

    const name = 'Brocamper'

  return (
    <div>
      <NameContext.Provider value={name}>
       <ChildComponent/>
      </NameContext.Provider>
    </div>
  )
}

export default MyComponent
