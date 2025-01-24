import React, { useState } from 'react'

const Practice = () => {

    //useState - Counter
    const [count,setCount] = useState(0);
    const decCount =()=>{
        setCount(c=>c-1);
    }
    const resetCount =()=>{
        setCount(c=>c=0);
    }
    const incCount =()=>{
        setCount(c=>c+1);
    }

    //useState - Form
    const [name,setName] = useState('')
    const [age,setAge] = useState(null)
    const [bio,setBio] = useState('')
    const [married,setMarried] = useState(false)
    const [employed,setEmployed] = useState('')
    const [preference,setPreference] = useState('')

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }
    function handleBioChange(e){
        setBio(e.target.value)
    }
    function toggleMarried(){
        setMarried(prev=>!prev)
    }
    function toggleEmployed(e){
        setEmployed(e.target.value)
    }
    function handlePreferenceChange(e){
        setPreference(e.target.value)
    }

  return (
    <div className='Parent'>
        <div className="counter-useState">
            <h2>Simple Counter : useState</h2>
            <p>{count}</p>
            <button onClick={decCount}>Dec</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incCount}>Inc</button>
        </div>

        <div className="onchange-useState">
            <h2>Form : useState</h2>
            <p>Name: {name}</p>
            <input type="text" value={name} placeholder='Enter name' onChange={handleNameChange}/> <br />
            <p>Age: {age}</p>
            <input type="number" value={age} placeholder='Update Age' onChange={handleAgeChange}/> <br />

            <p>Bio:{bio}</p>
            <textarea value={bio} placeholder='Type your bio' onChange={handleBioChange}></textarea> <br />

            <p>Married: {married ? 'Yes' : 'No'}</p>
            <button onClick={toggleMarried}>Toggle Status</button> <br />
            
            <label>
                 <input type="radio" value={'Employed'} checked={employed === 'Employed'} onChange={toggleEmployed}/> Employed
            </label> <br />
            
            <label>
                 <input type="radio" value={'Not Employed'} checked={employed === 'Not Employed'} onChange={toggleEmployed}/> Not Employed
            </label> <br />
            <p>Status:{employed}</p>

            <select value={preference} onChange={handlePreferenceChange}>
                <option value="">Select your preference</option>
                <option value="Work from home" >Work from home</option>
                <option value="Work from office"  >Work from office</option>
                <option value="Hybrid" >Hybrid</option>
            </select>
            
            <p>Preference: {preference}</p>
            
        </div>
      
    </div>
  )
}

export default Practice
