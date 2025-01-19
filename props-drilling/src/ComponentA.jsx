import ComponentB from "./ComponentB.jsx";



function ComponentA(props){
    
    const user = props.user;

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`${user} logged in`}</h2>
            <ComponentB user={user}/>
        </div>
      
    );
}

export default ComponentA