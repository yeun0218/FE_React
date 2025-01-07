import {useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from 'react';

const CartSummary = () => {
    const cart = useSelector((state) => state.resource.cart);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        let s = 0;
        cart.forEach((data)=>{
            s += ((Number(data.price) * Number(data.quantity)));
        })
        setSum(s);
    },[cart]);
    return(
        <>
            총 금액 : {sum}
        </>
    );
}
export default CartSummary;