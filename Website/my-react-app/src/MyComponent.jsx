import React,{useState} from 'react';

function MyComponent(){
    let [name,setName] = useState('guest');
    let [age,setAge] = useState(0);
    let [employed,setEmployedStatus] = useState(false);

    const updateName = () =>{
        setName('SpongeBob')
    }

    const incrementAge = () =>{
        setAge(age+1)
    }

    const decrementAge = () =>{
        setAge(age-1)
    }

    const resetAge = () =>{
        setAge(age=0)
    }

    const toggleEmployedStatus = () =>{
        setEmployedStatus(!employed)
    }

    return(
        <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <button onClick={decrementAge}>Decrement Age</button>
        <button onClick={resetAge}>Reset Age</button>

        <p>Employed status:{employed ? 'yes' : "no"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
        </div>
    );
}
export default MyComponent