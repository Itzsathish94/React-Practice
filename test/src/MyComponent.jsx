import React from 'react'
import useToggle from './useToggle'

function MyComponent() {

  let [isVisible,toggle] = useToggle();

  return (
    <div>
        <button onClick={toggle}>{isVisible ? 'hide' : 'show'}</button>
        {isVisible && <p>Visible now</p>}
    </div>
  )
}

export default MyComponent
