import React from 'react'
import Toggle from './Toggle'

const App = () => {

    const [isVisible,toggle] = Toggle();


  return (
    <div>
    <h1>{isVisible}</h1>
    </div>
  )
}

export default App
