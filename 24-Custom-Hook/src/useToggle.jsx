import React, { useState } from 'react'

function useToggle() {

    const [value,setValue] = useState(false);

    const toggle = ()=>setValue(v=>!v);

  return [value,toggle];
}

export default useToggle
