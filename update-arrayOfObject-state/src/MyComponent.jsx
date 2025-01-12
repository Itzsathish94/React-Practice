import React,{useState} from 'react';

function MyComponent(){

    const [cars,setCars] = useState([]);
    const [carYear,setYear] = useState(new Date().getFullYear());
    const [carMake,setMake] = useState('');
    const [carModel,setModel] = useState('');

    function handleAddCar(){
        const newCar = {year:carYear,make:carMake,model:carModel}
        setCars(c=>[...c,newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");

    }
    
    function handleRemoveCar(index){
        setCars(cars.filter((_,i)=>i!==index))
    }

    function handleYearChange(event){
        setYear(event.target.value);
        
    }

    function handleMakeChange(event){
        setMake(event.target.value);
        
    }

    function handleModelChange(event){
        setModel(event.target.value);
        
    }

    return (
        <div>
           <h1>List Of Car Objects</h1>
           <ul>
                {cars.map((car,index)=> <li key={index} onClick={()=>handleRemoveCar(index)}> 
                                        {car.year} {car.make} {car.model}
                                        </li>)}
           </ul>
           <input type="number" value={carYear} onChange={handleYearChange} /> <br />
           <input type="text" value={carMake} placeholder='Enter Car Make' onChange={handleMakeChange}/> <br />
           <input type="text" value={carModel} placeholder='Enter Car Model' onChange={handleModelChange}/> <br />
           <button onClick={handleAddCar}>Add</button>
        </div>
    );
}

export default MyComponent