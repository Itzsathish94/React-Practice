// import styles from './Button.module.css'

function Button(){

    // const Style = {
    //         backgroundColor: "hsl(200, 100%, 50%)",
    //         color:"white",
    //         padding: "10px 20px",
    //         borderRadius:"5px",
    //         border:"none",
    //         cursor: "pointer"
    // }

    // let count = 0; 

    // const handleClick = (name) => {
        
    //     if(count < 3){
    //         count++
    //         console.log(`${name}, you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name}, stop clicking me!`)
    //     }
    //     }

    // const handleClick2 = (name) => console.log(`${name}, Stop Clicking me`)

    const handleClick = (e) => e.target.textContent='Ouch 😟'

    return(<button onDoubleClick={(e)=>handleClick(e)}>Click me 😊</button>);
}
export default Button