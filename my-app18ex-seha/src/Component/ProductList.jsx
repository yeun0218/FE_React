import {useSelector, useDispatch } from 'react-redux';
import {useState, useCallback} from 'react';
import { ADD_TO_CART, UPDATE_QUANTITY } from '../Redux/ResourceSlice';

const ProductList = () => {

    const products = useSelector((state)=> state.resource.products);
    const cart = useSelector((state) => state.resource.cart);

    const dispatch = useDispatch();
    const check = (num) => {
        let b = false;
        cart.forEach((data)=> { 
        if(data.id === num){
            b= true;
        }});
        return b;
    }
    

    return(
        <>
            {products.map((data)=>(
                <div key={data.id}>
                    상품명 : {data.name}, 가격 : {data.price}
                    <input type="button" value="담기" onClick={() => {
                        check(data.id)? dispatch(UPDATE_QUANTITY([data.id,1])) : dispatch(ADD_TO_CART(data));
                    }}/>
                </div>
            ))}
        </>
    );
}
export default ProductList;