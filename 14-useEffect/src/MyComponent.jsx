import React,{useState,useEffect} from 'react';

function MyComponent(){

    const [count,setCount] = useState(0);
    const [color,setColor] = useState('green');

    function add(){
        setCount(c=>c+1);
    }

    function sub(){
        setCount(c=>c-1);
    }

    function changeColor(){
        setColor(c=>c==='green' ? 'red' : 'green');
    }

    useEffect(()=>{
        document.title = `${count} ${color}`
    },[count])

    return(
        <div>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={add}>Add</button>
            <button onClick={sub}>Sub</button> <br />
            <button value={color} onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent;