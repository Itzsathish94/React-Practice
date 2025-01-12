function Button4(){

    const handleClick4 = (e) => e.target.textContent = 'Ouch! 😔'


    return(
        <button onClick={(e)=>handleClick4(e)}>Click me 😀</button>
    );
}

export default Button4