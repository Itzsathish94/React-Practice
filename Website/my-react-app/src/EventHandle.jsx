import React,{useState} from 'react'

function EventHandle(){

    const [name,setName] = useState('Guest');
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState('');
    const [payment,setPayment] = useState('');
    const [shipping,setShipping] = useState('');

    function nameChange(event){
        setName(event.target.value)
    };

    function quantityChange(event){
        setQuantity(event.target.value)
    };

    function commentChange(event){
        setComment(event.target.value)
    };

    function paymentChange(event){
        setPayment(event.target.value)
    }

    function shippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={nameChange}/>
            <p>Name:{name}</p>

            <input value={quantity} type='number' onChange={quantityChange}/>
            <p>Quantity:{quantity}</p>

            <textarea placeholder='Enter Delivery Instructions' onChange={commentChange}></textarea>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={paymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label> <input type='radio' value='Pick up' checked={shipping==='Pick up'} onChange={shippingChange}/>Pick up
            </label> <br />
            <label> <input type='radio' value='Delivery' checked={shipping==='Delivery'} onChange={shippingChange}/>Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default EventHandle