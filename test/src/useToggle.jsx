import React from 'react'
import { useState } from 'react'

function useToggle() {

    let [value,setValue] = useState(false);

    const toggle = ()=> setValue(v=>!v);

  return [value,toggle]
}

export default useToggle
