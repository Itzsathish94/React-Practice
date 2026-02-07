import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

  let [users,setUser] = useState([]);

  useEffect(()=>{
    async function fetchUsers(){
      const res = await  axios.get('https://jsonplaceholder.typicode.com/users');
      setUser(res.data);
    }
    fetchUsers();
  },[])


  return (
    <div>
      <ul>
        {users.map((user,index)=><li key={index}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App
