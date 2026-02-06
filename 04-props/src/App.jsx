import Student from "./Student.jsx"
import Child from './childToParent.jsx'
import TEST from "./TEST.jsx"
import ForwardProps from "./ForwardProps.jsx"

function App() {

  return (
    <>
    <Student/>
    <Student name="Luna" age={40} isStudent={false}/>
    <Student name="Magik" age={20} isStudent={true}/>
    <Student name="Hela" age={18} isStudent={false}/> 
    <Child/>
    <TEST name='Sathish'/>
    </>
  )
}


export default App
