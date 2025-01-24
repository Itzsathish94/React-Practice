import React from 'react'
import { useState } from 'react'

const Practice = () => {

    //Array
    const [list,setList] = useState(['Hi','Hello']);
    const [newItem,setNewItem] = useState('');

    function addItem(){
        setList(l=>[...l,newItem]);
        setNewItem('')
    }
    function handleItemChange(e){
        setNewItem(e.target.value);
    }
    function deleteItem(index){
        setList(list.filter((_,i)=>i!==index))
    }

    //object
    const [obj,setObject] = useState({number:3,color:"Yellow",prod:"Pencil"})

    function numberChange(e){
        setObject(n=>({...n,number:e.target.value}))
    }

    function colorChange(e){
        setObject(n=>({...n,color:e.target.value}))
    }

    function prodChange(e){
        setObject(n=>({...n,prod:e.target.value}))
    }

    //Array of Objects
    const [cars,setCars] = useState([{year:new Date().getFullYear(),make:'Ford',model:'Mustang'}]);
    const [carsYear,setCarsYear] = useState(new Date().getFullYear())
    const [carsMake,setCarsMake] = useState('')
    const [carsModel,setCarsModel] = useState('')

    function addCar(){
        const newCar = {year:carsYear,make:carsMake,model:carsModel}
        setCars(c=>[...c,{...newCar}])
    }

    function deleteCar(index){
        setCars(cars.filter((_,i)=>i!==index))
    }

    function handleYearChange(e){
        setCarsYear(e.target.value)
    }

    function handleMakeChange(e){
        setCarsMake(e.target.value)
    }

    function handleModelChange(e){
        setCarsModel(e.target.value)
    }

  return (

    <div>
      <div className="update-array">
        <h3>Update Array</h3>
        <ul>
            {list.map((item,index)=>
                <li key={index} onClick={()=>deleteItem(index)}> 
                {item}
                </li>
            )}
        </ul>
        <input type="text" value={newItem} onChange={handleItemChange} /> <button onClick={addItem}>Add</button>
      </div> <br />

      <div className="update-object">
        <h3>Update Object</h3>
        <p>Your object is: {obj.number} {obj.color} {obj.prod}</p>
        <input type="number"  value={obj.number} onChange={numberChange}/> <br />
        <input type="text"  value={obj.color}  onChange={colorChange}/> <br />
        <input type="text" value={obj.prod}    onChange={prodChange}/> <br />
      </div> 
      <br />

      <div className="update-array-of-objects">
        <h3>Update Array Of Objects</h3>
        <ul>
            {cars.map((item,index)=>
                <li key={index} onClick={()=>deleteCar(index)}> 
                {item.year} {item.make} {item.model}
                </li>
            )}
        </ul>
        <input type="number"  value={carsYear} onChange={handleYearChange}/> <br />
        <input type="text"  value={carsMake} placeholder='Enter Car make'  onChange={handleMakeChange}/> <br />
        <input type="text" value={carsModel}  placeholder="Enter Car model" onChange={handleModelChange}/> <br />
        <button onClick={addCar}>Add</button>
      </div>
    </div>
  )
}

export default Practice
