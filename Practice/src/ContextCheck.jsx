import React, { useContext } from 'react'
import { UserContext } from './App'

function ContextCheck() {
    const user = useContext(UserContext)
  return (
    <div>
      <p>{user}</p>
    </div>
  )
}

export default ContextCheck
