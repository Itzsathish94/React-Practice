import React,{useState} from 'react';

function MyComponent(){

    let [name,setName] = useState('');
    let [age,setAge] = useState(0)
    let [isStudent,setStatus] = useState(false)

    const updateName = () =>{
        setName('Spongebob');
    }

    const incrementAge = ()=>{
        setAge(age+1)
    }

    const toggleStatus=()=>{
        setStatus(!isStudent)
    }

    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Student:{isStudent ? 'Yes' : 'No'}</p>
            <button onClick={toggleStatus}>Is student</button>
        </div>
        
    );
}

export default MyComponent