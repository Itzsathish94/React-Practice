function Button3(){

    let count = 0;

    const handleClick3 = (name) => {
        if(count < 3){
            count++
            console.log(`${name}, you clicked me ${count} times`)
        }
        else{
            console.log(`${name}, stop clicking me`)
        }
    }


    return(
        <button onClick={()=>handleClick3('Bro')}>Click me 😀</button>
    );
}

export default Button3