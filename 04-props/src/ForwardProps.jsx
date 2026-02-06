import React from 'react'

//prop-driling//////////

// function Button({label,onClick}){
//     return <button onClick={onClick}>{label}</button>
// };

// function Card({onClick}){
//     return <Button label = 'Click me' onClick={onClick}/>
// }

// function Page({onClick}){
//     return <Card onClick={onClick}/>
// };


// function ForwardProps() {
//     return (
//       <Page onClick={()=>alert('Clicked')}/>
//     )
//   }

//forward-props/////////////

// function Button({label,...rest}){
//     return <button {...rest}>{label}</button>
// }

// function Card(props){
//  return <Button label='Click me' {...props}/>
// }

// function Page(props){
//     return <Card {...props} />
// }

// function ForwardProps() {
//   return (
//     <Page onClick={()=>alert('Clicked')}/>
//   )
// }

// import React from 'react'

function Child(props){
  return (
    <p>{props.name}</p>
  )
}

function Parent(props){
  return (
    <div>
      <p>Sending props to child</p>
      <Child {...props}/>
    </div>
  )
}

function ForwardProps() {
  return (
    <div>
      <h1>Parent received props</h1>
      <Parent name='sathish'/>
    </div>
  )
}

export default ForwardProps



