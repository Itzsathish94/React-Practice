import React,{useState} from 'react';

function MyComponent(){

    const [car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"});

    function yearChange(event){
        setCar(c=>({...c,year:event.target.value}))
    }

    function makeChange(event){
        setCar(c=>({...c,make:event.target.value}))
    }

    function modelChange(event){
        setCar(c=>({...c,model:event.target.value}))
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={yearChange} /> <br />
            <input type="text" value={car.make} onChange={makeChange} /> <br />
            <input type="text" value={car.model} onChange={modelChange} /> <br />
        </div>
    );
}

export default MyComponent