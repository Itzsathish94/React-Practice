import MyComponent from './MyComponent.jsx'

function App() {
  
  const persons = ['Alice',
    'Bob',
    'Charlie',
    'David', 
    'Eve' ];

  return (
    <>
      <MyComponent data={persons}/>
    </>
  )
}

export default App
