import React,{useState,createContext} from 'react';
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();


function ComponentA(){

    const [user,setUser] = useState('Bro')


    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`${user} Logged in `}</h2>
            <UserContext.Provider value={user}>
            <ComponentB/>
            </UserContext.Provider>
           
        </div>
    );
}

export default ComponentA;