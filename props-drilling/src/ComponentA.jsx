import ComponentB from "./ComponentB.jsx";
import React,{useState} from 'react';


function ComponentA(){
    
    const [user,setUser] = useState('BroCamper')

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`${user} logged in`}</h2>
            <ComponentB user={user}/>
        </div>
      
    );
}

export default ComponentA