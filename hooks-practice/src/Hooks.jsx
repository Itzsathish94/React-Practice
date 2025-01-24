import React, { useRef,useEffect, useState  } from 'react'


const Hooks = () => {

    const ageRef = useRef(0);
    const [count,setCount] = useState(0)
    const userRef = useRef(null)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('Component Rendered');
      });

    useEffect(()=>{
      document.title = 'Hooks'
      console.log("Component mounted")
    },[])

    useEffect(()=>{
      document.title=`Hooks - ${name}`
      console.log('Name updated')
    },[name])

    const addAge = () =>{
        ageRef.current++
        console.log(`Ref ${ageRef.current}` )
    }

    const addCount = ()=>{
        setCount(c=>c+1)
        console.log(`Count : ${count}`)
    }

    const handleUserRef=()=>{
        userRef.current.focus();
        userRef.current.style.backgroundColor='yellow';
    }

    const printName =()=>{
        setName(userRef.current.value)
    }

  return (
    <div>
        <p>Count: {count}</p>  
        <p>Age: {ageRef.current}</p>  
      <button onClick={addAge}>Add</button>
      <button onClick={addCount}>Count++</button> <br />
      <p>{name}</p>
      <div>
        <input type="text" ref={userRef} onClick={handleUserRef}/> <button onClick={printName}>Print</button>
      </div>
    </div>
  )
}

export default Hooks
