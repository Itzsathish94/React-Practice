import React,{useState} from 'react'

function ArrayUpdate(){

    const [foods,setFoods] = useState(['Banana','Apple','Orange']);

    function addFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value='';

        setFoods(f=>[...f,newFood]);
    }

    function removeFood(index){
        setFoods(foods.filter((_,i)=> i !==index));
    }

    return(
        <>
        <h2>Food list</h2>
        <ul>
            {foods.map((food,index)=> <li key={index} onClick={()=>removeFood(index)}> 
                {food}
                </li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter Food Name'/>
        <button onClick={addFood}>Add Food</button>
        </>
    );
}

export default ArrayUpdate