import React from 'react'
import useToggle from './useToggle'

function App() {

  const [isVisible,toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>Visible now</p>}
    </div>
  )
}

export default App
