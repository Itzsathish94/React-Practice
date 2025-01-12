function Button(){

    const handleClick = () =>{
        console.log('You clicked me')
    }

    return(
        <button onClick={handleClick}>Click me 😀</button>
    );
}

export default Button