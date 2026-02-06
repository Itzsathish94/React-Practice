import List from './List.jsx';
import Practice from './practice.jsx';


function App() {

  const fruits = [{id:1, name:"Apple", quantity:20},
                  {id:2, name:"Orange", quantity:210},
                  {id:3, name:"Watermelon", quantity:30},
                  {id:4, name:"Kiwi", quantity:90},
                  {id:5, name:"Custard", quantity:10}
  ]

  const vegetable = [{id:6, name:"Onion", quantity:20},
    {id:7, name:"Beans", quantity:210},
    {id:8, name:"Cabbage", quantity:30},
    {id:9, name:"Lettuce", quantity:90},
    {id:10, name:"Tomato", quantity:10}
]
 
  return (
    <>
     {/* {fruits.length > 0 && <List items={fruits} category='Fruits'/> }
     {vegetable.length > 0 && <List items={vegetable} category='Vegetable'/>} */}
     <Practice/>
    </>
  )
}

export default App
