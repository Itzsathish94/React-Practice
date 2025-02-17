import React,{useState} from 'react';

function MyComponent(){

    const [foods,setFoods] = useState(['Apple','Banana','Orange']);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value='';
        setFoods(f=>[...f,newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index));
    }

    return (
        <div>
           <h1>Foods</h1>
           <ul>{foods.map((food,index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>
                                          {food}
                                          </li>)}
                                          </ul>
           <input type="text" id="foodInput" placeholder='Enter Food Name'/>
           <button onClick={handleAddFood} >Add</button>
        </div>
    );
}

export default MyComponent