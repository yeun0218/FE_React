import {useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART, UPDATE_QUANTITY } from '../Redux/ResourceSlice';
import { useState } from 'react';
import { useEffect } from 'react';

const Cart = () => {
    const [num, setNum] = useState([]);
    const cart = useSelector((state) => state.resource.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        let arr = cart.map((c)=>c.quantity);
        setNum(arr);
    },[cart]);

    const handleClick = (id,num) => {
        dispatch(UPDATE_QUANTITY([id,num]))
    }
    
    const style = {
        "text-decoration" : "line-through"
    }
    return(
        <>
            {cart.map((data)=>(
                <div key={data.id} style={data.quantity<=0? style : null}>
                   상품명 : {data.name}, 가격 : {data.price}, 
                   수량 : {data.quantity > 0? data.quantity : 0 }
                   <button onClick={()=>{handleClick(data.id,1)}}> + </button>
                   <button onClick={()=>{handleClick(data.id,-1)}}> - </button>
                   <input type="button" value="삭제" onClick={() => {dispatch(REMOVE_FROM_CART(data.id))}}/>
                </div>
            ))}
        </>
    );
}
export default Cart;