import React,{useState} from 'react';

function Counter(){

    let [count,setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    function reset(){
        setCount(count=0);
    }
    
    return (
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>
        
    );
}

export default Counter