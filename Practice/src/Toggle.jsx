import React from 'react'

const Toggle = () => {

    const [isVisible,toggle] = useState(false);

    function toggle(){
        toggle(!isVisible);
    }


  return [isVisible,toggle];
}

export default Toggle
