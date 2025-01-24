import React ,{useState} from 'react'

const Greeting = React.memo(({name})=>{
  console.log('Greeting rendered')
  return <div><p>Hi Iam , {name}</p></div>
})

const App = () => {

  const [count,setCount] = useState(0);
  console.log(count)

  return (
    <div>
    <button onClick={()=>setCount(c=>c+1)}>Increment</button>
    <Greeting name='Brocamper'/>
    </div>
  )
}

export default App



