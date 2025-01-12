import Student from "./Student.jsx"


function App() {

  return (
    <>
    <Student/>
    <Student name="Luna" age={40} isStudent={false}/>
    <Student name="Magik" age={20} isStudent={true}/>
    <Student name="Hela" age={18} isStudent={false}/>
    </>
  )
}


export default App
