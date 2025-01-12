import React,{useState} from 'react'

function ObjectUpdate(){

    const [car,setCar] = useState({year:2024,make:"Ferrari",model:"Therila"})

    function handleYearChange(event){
        setCar(c=>({...c,year:event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c=>({...c,make:event.target.value}))
    }

    function handleModelChange(event){
        setCar(c=>({...c,model:event.target.value}))
    }

    return(
        <>
        <p>Your favorite car is {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.number} onChange={handleYearChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
        </>
    );
}

export default ObjectUpdate