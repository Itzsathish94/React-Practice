import React,{useState} from 'react';

function MyComponent(props){

    const list = props.data
    const [name,setName] = useState(list);
    const [person,setPerson] = useState('');
    const [originalList] = useState(list)


    function searchName(){
        const filterdPerson = originalList.filter(p=>p.toLowerCase().includes(person.toLowerCase()));
        setName(filterdPerson);
    }

    return(
        <div>
            <h1>Name list </h1>
            <input type="text" value={person} placeholder='Search' onChange={e=>setPerson(e.target.value)}/> <button onClick={searchName}>Search</button>
            <ul>
                {name.map((person,index)=><li key={index}>{person}</li>)}
            </ul>
        </div>
    );
}

<>
</>

export default MyComponent