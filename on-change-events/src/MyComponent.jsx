import React,{useState} from 'react';

function MyComponent(){

    const [name,setName] = useState('Guest');
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState('');
    const [payment,setPayment] = useState('');
    const [shipping,setShipping] = useState('');

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type='text'/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Leave your comment here'></textarea>
            <p>Comment :{comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=''> Select an option</option>
                <option value='Visa'> Visa</option>
                <option value='Master'> Master</option>
                <option value='COD'> COD</option>
            </select>
            <p>Payment Method : {payment}</p>

            <label>
                <input type="radio" value='Pick up' onChange={handleShippingChange} checked={shipping === 'Pick up'}/>
                Pick up 
            </label>
            <br />
            <label>
            <input type="radio" value='Delivery' onChange={handleShippingChange} checked={shipping === 'Delivery'}/>
                Delivery 
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );
}

export default MyComponent