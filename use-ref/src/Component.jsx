import React,{useState,useEffect,useRef} from 'react';

function Component(){

    const ref = useRef(0);

    useEffect(()=>{
        console.log('Component rendered')
    });

    function addCount(){
        ref.current++;
        console.log(ref.current);
    };

    return (
        <button onClick={addCount}>Click me</button>
    );
}

export default Component