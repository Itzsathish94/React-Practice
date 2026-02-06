function Button4(){

    const handleClick4 = (e) => e.target.textContent = 'Ouch! 😔'


    return(
        <button onClick={handleClick4}>Click me 😀</button>
    );
}

export default Button4